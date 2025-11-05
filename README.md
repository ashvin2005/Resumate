# Resumate - Smart AI-Powered Resume Analyzer & ATS Optimizer

A cutting-edge MERN stack application that analyzes resumes using AI, checks ATS compatibility, and provides powerful suggestions to improve your chances of landing your dream job.

---

## ✨ Features

### Core Features
✅ Upload Resume (PDF/DOCX)  
✅ Resume Content Extraction  
✅ Resume Scoring based on ATS standards  
✅ AI-Powered Suggestions for Improvements  
✅ Job Role Matching (based on uploaded JD)  
✅ Keyword Optimization (missing skills & keywords)   
✅ Resume Rewriting using AI  
✅ Resume History & Management

### Modern UI/UX Features
✅ **Dark/Light Mode** - Seamless theme switching with system preference detection  
✅ **Glass Morphism** - Modern, elegant UI design  
✅ **Smooth Animations** - Powered by Framer Motion  
✅ **Splash Screen** - Professional loading experience  
✅ **Toast Notifications** - User-friendly feedback system  
✅ **Copy to Clipboard** - Easy content sharing  
✅ **Scroll to Top** - Enhanced navigation  
✅ **Responsive Design** - Works perfectly on all devices

### Authentication (UI Ready)
✅ Sign In Page - Fully functional UI  
✅ Sign Up Page - With validation and password strength checks  
✅ Authentication Context - Global state management  
✅ Protected Routes Ready - Awaiting backend integration

---

## 🛠 Tech Stack

**Frontend:**
- React.js 18+ with Vite
- Tailwind CSS for styling
- Framer Motion for animations
- React Router v6 for navigation
- React Icons for iconography
- Axios for API calls
- Context API for state management

**Backend:**
- Node.js
- Express.js
- MongoDB + Mongoose
- OpenAI API for Resume Analysis
- Multer for file uploads

**Other Tools:**
- Git & GitHub for version control
- ESLint for code quality
- PostCSS for CSS processing

---

## 🔍 How It Works

1. **Upload** your resume in PDF or DOCX format
2. **Extract** content automatically from your document
3. **Analyze** with AI to compare against job requirements
4. **Score** your resume based on ATS standards
5. **Improve** with AI-generated suggestions and rewrites
6. **Track** your resume history and improvements over time

---

## 🧠 AI Capabilities

- **Resume Scoring:** Evaluates formatting, readability, and skills match
- **Job Match Analyzer:** Compares resume with Job Description
- **Keyword Suggestion:** Identifies missing critical keywords
- **Resume Rewriter:** Generates polished, optimized content using GPT
- **ATS Optimization:** Ensures your resume passes applicant tracking systems

---

## 📁 Project Structure

```
ResuMate/
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   └── resumeController.js
│   ├── middleware/
│   │   └── uploadMiddleware.js
│   ├── models/
│   │   └── Resume.js
│   ├── routes/
│   │   └── resumeRoutes.js
│   ├── services/
│   │   └── openaiService.js
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── ThemeToggle.jsx
│   │   │   ├── SplashScreen.jsx
│   │   │   ├── LoadingSpinner.jsx
│   │   │   ├── CopyButton.jsx
│   │   │   └── ScrollToTop.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── History.jsx
│   │   │   ├── Pricing.jsx
│   │   │   ├── About.jsx
│   │   │   ├── SignIn.jsx
│   │   │   └── SignUp.jsx
│   │   ├── context/
│   │   │   ├── ThemeContext.jsx
│   │   │   ├── ToastContext.jsx
│   │   │   └── AuthContext.jsx
│   │   ├── services/
│   │   │   ├── api.js
│   │   │   └── authService.js
│   │   ├── utils/
│   │   │   ├── fileValidation.js
│   │   │   └── formatResponse.js
│   │   ├── hooks/
│   │   │   └── useCopyToClipboard.js
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── public/
│   ├── tailwind.config.js
│   ├── vite.config.js
│   └── package.json
│
├── AUTHENTICATION.md
├── ENHANCEMENTS.md
├── IMPLEMENTATION_SUMMARY.md
├── QUICK_START.md
├── CHANGELOG.md
└── README.md
```

---


## 📧 Contact

**Ashvin Tiwari**
- Email: ashvintiwari161@gmail.com
- LinkedIn: [ashvin-tiwari](https://www.linkedin.com/in/ashvin-tiwari/)
- GitHub: [ashvin2005](https://github.com/ashvin2005)

---


**Made with ❤️ for Job Seekers**
