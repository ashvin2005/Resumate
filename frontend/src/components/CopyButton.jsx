// components/CopyButton.jsx
import { motion } from "framer-motion";
import { FiCopy, FiCheck } from "react-icons/fi";
import { useState } from "react";
import { useCopyToClipboard } from "../hooks/useCopyToClipboard";

const CopyButton = ({ text, className = "" }) => {
  const [isCopied, setIsCopied] = useState(false);
  const { copyToClipboard } = useCopyToClipboard();

  const handleCopy = async () => {
    const success = await copyToClipboard(text);
    if (success) {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleCopy}
      className={`flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors ${className}`}
      aria-label="Copy to clipboard"
    >
      {isCopied ? (
        <>
          <FiCheck className="w-4 h-4 text-green-600 dark:text-green-400" />
          <span className="text-sm font-medium text-green-600 dark:text-green-400">
            Copied!
          </span>
        </>
      ) : (
        <>
          <FiCopy className="w-4 h-4 text-gray-600 dark:text-gray-400" />
          <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
            Copy
          </span>
        </>
      )}
    </motion.button>
  );
};

export default CopyButton;
