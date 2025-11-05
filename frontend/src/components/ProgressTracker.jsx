// components/ProgressTracker.jsx
import { motion } from "framer-motion";
import { FiCheckCircle, FiCircle } from "react-icons/fi";

const ProgressTracker = ({ currentStep = 0 }) => {
  const steps = [
    { id: 1, label: "Upload Resume", completed: currentStep >= 1 },
    { id: 2, label: "AI Analysis", completed: currentStep >= 2 },
    { id: 3, label: "Review Results", completed: currentStep >= 3 },
    { id: 4, label: "Improve & Retest", completed: currentStep >= 4 },
  ];

  return (
    <div className="glass p-6 rounded-xl">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        Your Progress
      </h3>

      <div className="space-y-4">
        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center gap-3"
          >
            {/* Icon */}
            <motion.div
              animate={{
                scale: step.completed ? [1, 1.2, 1] : 1,
              }}
              transition={{ duration: 0.3 }}
            >
              {step.completed ? (
                <FiCheckCircle className="w-6 h-6 text-green-500" />
              ) : (
                <FiCircle className="w-6 h-6 text-gray-300 dark:text-gray-600" />
              )}
            </motion.div>

            {/* Label */}
            <div className="flex-1">
              <p
                className={`text-sm font-medium ${
                  step.completed
                    ? "text-gray-900 dark:text-white"
                    : "text-gray-400 dark:text-gray-500"
                }`}
              >
                {step.label}
              </p>
            </div>

            {/* Progress Bar */}
            {index < steps.length - 1 && (
              <div className="absolute left-[1.1rem] mt-10 w-0.5 h-8 bg-gray-200 dark:bg-gray-700">
                {step.completed && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "100%" }}
                    className="w-full bg-green-500"
                  />
                )}
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Progress Percentage */}
      <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-600 dark:text-gray-300">
            Overall Progress
          </span>
          <span className="text-sm font-semibold text-gray-900 dark:text-white">
            {Math.round((currentStep / steps.length) * 100)}%
          </span>
        </div>
        <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${(currentStep / steps.length) * 100}%` }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="h-full bg-gradient-to-r from-blue-500 to-green-500"
          />
        </div>
      </div>
    </div>
  );
};

export default ProgressTracker;
