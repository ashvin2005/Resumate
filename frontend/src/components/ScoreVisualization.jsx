// components/ScoreVisualization.jsx
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const ScoreVisualization = ({ score = 0, label = "Overall Score", color = "blue" }) => {
  const [displayScore, setDisplayScore] = useState(0);
  const circumference = 2 * Math.PI * 45; // radius = 45
  const offset = circumference - (displayScore / 100) * circumference;

  useEffect(() => {
    const timer = setTimeout(() => {
      let current = 0;
      const increment = score / 50; // 50 frames
      const interval = setInterval(() => {
        current += increment;
        if (current >= score) {
          setDisplayScore(score);
          clearInterval(interval);
        } else {
          setDisplayScore(Math.floor(current));
        }
      }, 20);
      return () => clearInterval(interval);
    }, 100);
    return () => clearTimeout(timer);
  }, [score]);

  const getColor = () => {
    if (color !== "blue") return color;
    if (score >= 80) return "#10b981"; // green
    if (score >= 60) return "#f59e0b"; // yellow
    return "#ef4444"; // red
  };

  return (
    <div className="flex flex-col items-center">
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="relative w-32 h-32"
      >
        {/* Background Circle */}
        <svg className="w-32 h-32 transform -rotate-90">
          <circle
            cx="64"
            cy="64"
            r="45"
            stroke="currentColor"
            strokeWidth="8"
            fill="none"
            className="text-gray-200 dark:text-gray-700"
          />
          {/* Progress Circle */}
          <motion.circle
            cx="64"
            cy="64"
            r="45"
            stroke={getColor()}
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: offset }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </svg>
        {/* Score Text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center"
          >
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
              {displayScore}
            </span>
            <span className="text-gray-500 dark:text-gray-400 text-sm">%</span>
          </motion.div>
        </div>
      </motion.div>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="mt-2 text-sm font-medium text-gray-600 dark:text-gray-300"
      >
        {label}
      </motion.p>
    </div>
  );
};

export default ScoreVisualization;
