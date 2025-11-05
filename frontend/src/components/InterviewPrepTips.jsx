// components/InterviewPrepTips.jsx
import { motion } from "framer-motion";
import { FiMessageCircle, FiTarget, FiTrendingUp } from "react-icons/fi";

const InterviewPrepTips = ({ resumeData }) => {
  const tips = [
    {
      icon: FiMessageCircle,
      title: "Tell Your Story",
      description: "Prepare a compelling narrative around your key achievements and how they align with the role.",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: FiTarget,
      title: "Research the Company",
      description: "Study the company culture, recent news, and how your skills can solve their specific challenges.",
      color: "from-green-500 to-green-600",
    },
    {
      icon: FiTrendingUp,
      title: "Quantify Your Impact",
      description: "Be ready to discuss metrics and concrete results from your experience with specific numbers.",
      color: "from-purple-500 to-purple-600",
    },
  ];

  const commonQuestions = [
    "Tell me about yourself and your background",
    "What are your greatest strengths?",
    "Describe a challenging project you worked on",
    "Where do you see yourself in 5 years?",
    "Why should we hire you for this position?",
  ];

  return (
    <div className="glass p-6 rounded-xl">
      <div className="flex items-center gap-2 mb-4">
        <div className="text-2xl">🎯</div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Interview Prep Guide
        </h3>
      </div>

      <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
        Based on your resume, here's how to prepare for interviews
      </p>

      {/* Key Tips */}
      <div className="space-y-4 mb-6">
        {tips.map((tip, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex gap-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
          >
            <div className={`p-2 bg-gradient-to-r ${tip.color} rounded-lg h-fit`}>
              <tip.icon className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                {tip.title}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {tip.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Common Questions */}
      <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
        <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
          Practice These Questions
        </h4>
        <div className="space-y-2">
          {commonQuestions.map((question, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="flex items-start gap-2 p-3 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition"
            >
              <span className="text-blue-600 dark:text-blue-400 font-bold text-sm mt-0.5">
                {index + 1}.
              </span>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                {question}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* STAR Method Reminder */}
      <div className="mt-6 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
        <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
          <span>⭐</span>
          Pro Tip: Use the STAR Method
        </h4>
        <div className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
          <p><strong>S</strong>ituation - Set the context</p>
          <p><strong>T</strong>ask - Describe your responsibility</p>
          <p><strong>A</strong>ction - Explain what you did</p>
          <p><strong>R</strong>esult - Share the outcome with metrics</p>
        </div>
      </div>
    </div>
  );
};

export default InterviewPrepTips;
