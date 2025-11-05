// components/ResumeScoreMeter.jsx
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const ResumeScoreMeter = ({ score = 0, label = "Resume Quality" }) => {
  const [displayScore, setDisplayScore] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      let current = 0;
      const increment = score / 50;
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
    if (score >= 80) return "from-green-500 to-green-600";
    if (score >= 60) return "from-yellow-500 to-orange-500";
    return "from-red-500 to-red-600";
  };

  const getEmoji = () => {
    if (score >= 80) return "🎉";
    if (score >= 60) return "👍";
    return "💪";
  };

  return (
    <div className="relative">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {label}
        </span>
        <span className="text-sm font-bold text-gray-900 dark:text-white">
          {displayScore}%
        </span>
      </div>
      <div className="relative h-4 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${displayScore}%` }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className={`h-full bg-gradient-to-r ${getColor()} rounded-full relative`}
        >
          <motion.div
            animate={{
              x: [0, 10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          />
        </motion.div>
      </div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring" }}
        className="absolute -top-1 right-0 text-2xl"
      >
        {getEmoji()}
      </motion.div>
    </div>
  );
};

export default ResumeScoreMeter;
