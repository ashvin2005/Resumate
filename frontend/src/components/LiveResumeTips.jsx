// components/LiveResumeTips.jsx
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { FiInfo, FiArrowRight } from "react-icons/fi";

const LiveResumeTips = () => {
  const tips = [
    {
      title: "Keep it Concise",
      description: "Your resume should be 1-2 pages. Recruiters spend only 6 seconds scanning!",
      icon: "📄",
    },
    {
      title: "Use Action Verbs",
      description: "Start bullet points with strong verbs like 'Led', 'Developed', 'Achieved'.",
      icon: "⚡",
    },
    {
      title: "Quantify Achievements",
      description: "Use numbers! 'Increased sales by 30%' is better than 'Increased sales'.",
      icon: "📊",
    },
    {
      title: "Tailor for Each Job",
      description: "Customize your resume for each application. Match keywords from job descriptions.",
      icon: "🎯",
    },
    {
      title: "Proofread Carefully",
      description: "Typos can cost you the job. Use spell check and ask someone to review.",
      icon: "✅",
    },
    {
      title: "Include Keywords",
      description: "Use industry-specific terms to pass ATS filters. Research job postings.",
      icon: "🔑",
    },
  ];

  const [currentTip, setCurrentTip] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTip((prev) => (prev + 1) % tips.length);
    }, 5000); // Change tip every 5 seconds
    return () => clearInterval(interval);
  }, [tips.length]);

  const nextTip = () => {
    setCurrentTip((prev) => (prev + 1) % tips.length);
  };

  const prevTip = () => {
    setCurrentTip((prev) => (prev - 1 + tips.length) % tips.length);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass p-6 rounded-xl"
    >
      <div className="flex items-center gap-2 mb-4">
        <FiInfo className="w-5 h-5 text-blue-600 dark:text-blue-400" />
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Resume Tips
        </h3>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentTip}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3 }}
          className="min-h-[120px]"
        >
          <div className="flex items-start gap-3">
            <div className="text-3xl">{tips[currentTip].icon}</div>
            <div className="flex-1">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                {tips[currentTip].title}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {tips[currentTip].description}
              </p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
        <div className="flex gap-1">
          {tips.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTip(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentTip
                  ? "bg-blue-600 dark:bg-blue-400 w-6"
                  : "bg-gray-300 dark:bg-gray-600"
              }`}
              aria-label={`Go to tip ${index + 1}`}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button
            onClick={prevTip}
            className="p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            aria-label="Previous tip"
          >
            <FiArrowRight className="w-4 h-4 rotate-180 text-gray-600 dark:text-gray-300" />
          </button>
          <button
            onClick={nextTip}
            className="p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            aria-label="Next tip"
          >
            <FiArrowRight className="w-4 h-4 text-gray-600 dark:text-gray-300" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default LiveResumeTips;
