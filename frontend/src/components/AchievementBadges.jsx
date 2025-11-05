// components/AchievementBadges.jsx
import { motion } from "framer-motion";
import { FiAward, FiTrendingUp, FiZap, FiStar } from "react-icons/fi";

const AchievementBadges = ({ resumesAnalyzed = 0 }) => {
  const badges = [
    {
      id: 1,
      name: "First Step",
      description: "Analyzed your first resume",
      icon: FiZap,
      color: "from-yellow-400 to-orange-500",
      unlocked: resumesAnalyzed >= 1,
      requirement: "1 resume",
    },
    {
      id: 2,
      name: "Getting Started",
      description: "Analyzed 5 resumes",
      icon: FiTrendingUp,
      color: "from-green-400 to-emerald-500",
      unlocked: resumesAnalyzed >= 5,
      requirement: "5 resumes",
    },
    {
      id: 3,
      name: "Resume Pro",
      description: "Analyzed 10 resumes",
      icon: FiAward,
      color: "from-blue-400 to-indigo-500",
      unlocked: resumesAnalyzed >= 10,
      requirement: "10 resumes",
    },
    {
      id: 4,
      name: "Career Master",
      description: "Analyzed 25 resumes",
      icon: FiStar,
      color: "from-purple-400 to-pink-500",
      unlocked: resumesAnalyzed >= 25,
      requirement: "25 resumes",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass p-6 rounded-xl"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Achievements
        </h3>
        <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-medium rounded-full">
          {badges.filter((b) => b.unlocked).length}/{badges.length}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {badges.map((badge, index) => (
          <motion.div
            key={badge.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: badge.unlocked ? 1.05 : 1 }}
            className={`relative p-3 rounded-lg border-2 transition ${
              badge.unlocked
                ? "border-transparent bg-gradient-to-br " + badge.color
                : "border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50"
            }`}
          >
            {/* Badge Icon */}
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                badge.unlocked
                  ? "bg-white/20"
                  : "bg-gray-200 dark:bg-gray-700"
              }`}
            >
              <badge.icon
                className={`w-5 h-5 ${
                  badge.unlocked
                    ? "text-white"
                    : "text-gray-400 dark:text-gray-500"
                }`}
              />
            </div>

            {/* Badge Info */}
            <h4
              className={`text-sm font-semibold mb-1 ${
                badge.unlocked
                  ? "text-white"
                  : "text-gray-600 dark:text-gray-400"
              }`}
            >
              {badge.name}
            </h4>
            <p
              className={`text-xs ${
                badge.unlocked
                  ? "text-white/80"
                  : "text-gray-500 dark:text-gray-500"
              }`}
            >
              {badge.description}
            </p>

            {/* Lock Overlay */}
            {!badge.unlocked && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-900/10 dark:bg-gray-900/30 rounded-lg backdrop-blur-[1px]">
                <div className="text-center">
                  <div className="text-2xl mb-1">🔒</div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 font-medium">
                    {badge.requirement}
                  </p>
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Progress Message */}
      <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
        <p className="text-xs text-center text-gray-700 dark:text-gray-300">
          {resumesAnalyzed === 0
            ? "Upload your first resume to unlock achievements! 🚀"
            : `Keep going! You've analyzed ${resumesAnalyzed} resume${
                resumesAnalyzed !== 1 ? "s" : ""
              }! 🎉`}
        </p>
      </div>
    </motion.div>
  );
};

export default AchievementBadges;
