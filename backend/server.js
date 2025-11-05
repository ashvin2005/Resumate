require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const multer = require("multer");
const pdf = require("pdf-parse");
const { promisify } = require("util");
const textract = require("textract");
const fs = require("fs");
const path = require("path");
const { OpenAI } = require("openai");
const connectDB = require("./config/db");
const resumeRoutes = require("./routes/resumeRoutes");
const authRoutes = require("./routes/authRoutes");

const uploadDir = "uploads/";
const app = express();
const PORT = process.env.PORT || 5000 ;

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

connectDB();

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const allowedOrigins = [
  "https://resume-analyzer-1-qcwc.onrender.com",
  "http://resume-analyzer-1-qcwc.onrender.com",
  "https://resume-analyzer-yegi.onrender.com",
  "http://resume-analyzer-yegi.onrender.com",
  "http://localhost:5173",
  "http://localhost:5000"
];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    }
    
    if (allowedOrigins.some(allowed => origin.includes(allowed))) {
      return callback(null, true);
    }
    
    callback(new Error("Not allowed by CORS"));
  },
  credentials: true,
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

const upload = multer({
  dest: uploadDir,
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB limit
  },
  fileFilter: (req, file, cb) => {
    const filetypes = /pdf|docx|doc/;
    const extname = filetypes.test(
      path.extname(file.originalname).toLowerCase()
    );
    const mimetype = filetypes.test(file.mimetype);

    if (extname && mimetype) {
      return cb(null, true);
    } else {
      cb(new Error("Only PDF, DOCX, and DOC files are allowed"));
    }
  },
});

app.post("/api/extract-text", upload.single("file"), async (req, res, next) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    const filePath = req.file.path;
    const fileExt = path.extname(req.file.originalname).toLowerCase();

    let text = "";

    if (fileExt === ".pdf") {
      const dataBuffer = fs.readFileSync(filePath);
      const data = await pdf(dataBuffer);
      text = data.text;
    } else if (fileExt === ".docx" || fileExt === ".doc") {
      text = await new Promise((resolve, reject) => {
        textract.fromFileWithPath(filePath, (error, extractedText) => {
          if (error) {
            reject(error);
          } else {
            resolve(extractedText);
          }
        });
      });
    }

    await promisify(fs.unlink)(filePath);

    res.json({ text });
  } catch (error) {
    next(error);
  }
});

app.post("/api/analyze-resume", async (req, res, next) => {
  try {
    const { resumeText, requirements } = req.body;

    if (!resumeText || !requirements) {
      return res
        .status(400)
        .json({ error: "Both resume text and requirements are required" });
    }

    const prompt = `
    Analyze the following resume against the given job requirements and provide a comprehensive, professional-grade analysis. You are acting as an AI-powered Resume Expert and ATS (Applicant Tracking System) analyzer.
    
    Job Requirements:
    ${requirements}
    
    Resume Content:
    ${resumeText}
    
    Your task is to perform the following:
    1. **Match Score**: Provide a match percentage (0-100%) based on relevance, keywords, and overall alignment with the job description.
    2. **Matching Skills**: List all matching technical, soft, and domain-specific skills found in both the resume and job description.
    3. **Missing Skills**: Identify important skills, tools, or experience areas mentioned in the job description that are missing from the resume.
    4. **Keyword Density**: Highlight the most common keywords in the resume and job description and mention if the resume lacks key industry terms.
    5. **Achievements vs Responsibilities**: Evaluate whether the resume emphasizes measurable achievements or just generic responsibilities. Suggest improvements.
    6. **ATS Compatibility**: Analyze whether the formatting, section structure, and keyword usage make it ATS-friendly. Suggest improvements if needed.
    7. **Tone and Clarity**: Comment on the professional tone, clarity, grammar, and writing style. Identify any vague or weak statements.
    8. **Structural Feedback**: Evaluate the structure (contact info, summary, skills, experience, education). Suggest if any sections are missing or out of order.
    9. **Resume Format Suggestions**: Provide specific advice if the resume should be tailored to a different layout (e.g. reverse-chronological, hybrid, functional).
    10. **Personalization Advice**: If the resume is too generic, suggest ways to personalize it to better fit the company or job role.
    11. **Final Recommendations**: List all practical, actionable improvements the user should make to increase job compatibility and professionalism.
    
    Return your analysis in the following JSON structure:
    {
      "matchScore": number,
      "matchingSkills": string[],
      "missingSkills": string[],
      "keywordInsights": {
        "commonKeywords": string[],
        "missingKeywords": string[]
      },
      "achievementVsResponsibility": string,
      "atsCompatibility": string,
      "toneClarityFeedback": string,
      "structureFeedback": string,
      "formatSuggestions": string,
      "personalizationTips": string,
      "finalRecommendations": string[]
    }
    `;

    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content:
            "You are a professional AI resume reviewer with expertise in HR, ATS systems. Provide deeply analytical and structured feedback.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 0.3,
      max_tokens: 1000,
    });

    const content = response.choices[0].message.content;
    let analysis;

    try {
      analysis = JSON.parse(content);

      if (
        typeof analysis.matchScore !== "number" ||
        !Array.isArray(analysis.matchingSkills) ||
        !Array.isArray(analysis.missingSkills) ||
        !analysis.keywordInsights ||
        !Array.isArray(analysis.finalRecommendations)
      ) {
        throw new Error("Invalid analysis format");
      }

      analysis.matchScore = Math.min(100, Math.max(0, analysis.matchScore));

      analysis.analysisDate = new Date().toISOString();
      analysis.source = "OpenAI GPT-4";

      res.json(analysis);
    } catch (parseError) {
      console.error("Failed to parse response:", content);
      throw new Error("Failed to analyze resume. Please try again.");
    }
  } catch (error) {
    console.error("Analysis error:", error);
    next(error);
  }
});

app.use("/api/resumes", resumeRoutes);
app.use("/api/auth", authRoutes);

app.get("/health", (req, res) => {
  res.status(200).json({ status: "healthy" });
});

app.get("/", (req, res) => {
  res.status(200).json({ 
    message: "Resumate API",
    version: "1.0.0",
    endpoints: {
      auth: "/api/auth",
      resumes: "/api/resumes",
      health: "/health"
    }
  });
});

app.use((err, req, res, next) => {
  console.error("❌ Error:", err.message);

  if (err.code === "LIMIT_FILE_SIZE") {
    return res
      .status(413)
      .json({ error: "File too large. Maximum size is 10MB" });
  }
  if (err.message === "Only PDF, DOCX, and DOC files are allowed") {
    return res.status(400).json({ error: err.message });
  }

  res.status(err.status || 500).json({
    error: err.message || "Internal Server Error",
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
