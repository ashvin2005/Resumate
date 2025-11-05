// components/LoadingSpinner.jsx
import { motion } from "framer-motion";

const LoadingSpinner = ({ size = "md", text = "Loading..." }) => {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <motion.div
        className={`${sizeClasses[size]} relative`}
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute inset-0 rounded-full border-4 border-blue-200 dark:border-blue-900"></div>
        <div className="absolute inset-0 rounded-full border-4 border-blue-600 dark:border-blue-400 border-t-transparent"></div>
      </motion.div>
      {text && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-gray-600 dark:text-gray-300 font-medium"
        >
          {text}
        </motion.p>
      )}
    </div>
  );
};

export default LoadingSpinner;
