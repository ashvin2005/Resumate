// pages/About.jsx
import { motion } from "framer-motion";

const About = () => {
  const sections = [
  {
    title: "My Journey",
    content:
      "Hey, I’m Ashvin — a Computer Science (AI & ML) engineering student who loves turning ideas into impactful tech solutions. While learning web development, I noticed a big challenge that many job seekers face: resumes that aren’t optimized for Applicant Tracking Systems (ATS), which often stops them from getting noticed even if they’re highly skilled.",
  },
  {
    title: "The Vision",
    content:
      "That’s what led me to create Resumate — a smart Resume Analyzer and ATS Optimizer built using the MERN stack and powered by the OpenAI API. It helps users evaluate their resumes, highlights missing keywords, provides actionable feedback, and improves formatting to increase their chances of landing interviews.",
  },
  {
    title: "The Technology",
    content:
      "Resumate is built with React.js, Node.js, Express.js, MongoDB, and OpenAI. It extracts text from uploaded resumes, compares it with job descriptions, and generates a resume score. Using AI, it also suggests better keywords and rewrites sections to align with industry standards — helping users create more impactful resumes.",
  },
  {
    title: "The Mission",
    content:
      "My goal with Resumate is simple — to make professional, AI-powered resume improvement accessible to everyone. I want to help people, especially students and freshers, enhance their resumes without needing expensive tools or career coaching. With the right guidance and smart technology, anyone can unlock better opportunities.",
  },
];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
            className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg"
          >
            <svg
              className="w-12 h-12 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            About Resumate
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Empowering job seekers with AI-driven resume analysis and
            optimization
          </p>
        </motion.div>

        {/* Content Sections */}
        <div className="space-y-8">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-2xl card-hover"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-sm">
                  {index + 1}
                </div>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                  {section.title}
                </h2>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {section.content}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-700 dark:to-indigo-700 p-8 rounded-2xl text-white shadow-xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
              <span>💬</span> Let's Connect
            </h3>
            <p className="text-blue-100 mb-4">
              I'm constantly learning, building, and improving Resumate.
              Have ideas or feedback? Feel free to reach out!
            </p>
            <motion.a
              href="mailto:ashvintiwari161@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-600 font-medium rounded-lg hover:shadow-lg transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              ashvintiwari161@gmail.com
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
