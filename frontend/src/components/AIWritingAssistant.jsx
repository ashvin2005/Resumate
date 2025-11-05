// components/AIWritingAssistant.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiZap, FiRefreshCw, FiCopy, FiCheck } from "react-icons/fi";

const AIWritingAssistant = () => {
  const [inputText, setInputText] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState(-1);

  const exampleSuggestions = {
    "managed team": [
      "Led a cross-functional team of 10+ members to achieve project milestones",
      "Spearheaded team initiatives resulting in 30% productivity increase",
      "Directed and mentored a high-performing team of professionals",
    ],
    "responsible for": [
      "Orchestrated the development and implementation of key strategies",
      "Pioneered innovative solutions that transformed business processes",
      "Championed initiatives that drove measurable business outcomes",
    ],
    "worked on": [
      "Architected and deployed scalable solutions for enterprise clients",
      "Engineered robust systems handling 1M+ daily transactions",
      "Developed cutting-edge features that enhanced user experience by 40%",
    ],
    "helped": [
      "Drove strategic initiatives that accelerated revenue growth by 25%",
      "Catalyzed organizational transformation through data-driven insights",
      "Empowered stakeholders with actionable analytics and recommendations",
    ],
  };

  const generateSuggestions = () => {
    setIsGenerating(true);
    setSuggestions([]);

    setTimeout(() => {
      const lowerInput = inputText.toLowerCase();
      let foundSuggestions = [];

      // Find matching suggestions
      Object.keys(exampleSuggestions).forEach((key) => {
        if (lowerInput.includes(key)) {
          foundSuggestions = exampleSuggestions[key];
        }
      });

      // If no match, provide generic improvements
      if (foundSuggestions.length === 0) {
        foundSuggestions = [
          `Enhanced ${inputText} through strategic planning and execution`,
          `Achieved measurable impact by ${inputText.toLowerCase()}`,
          `Delivered exceptional results through ${inputText.toLowerCase()}`,
        ];
      }

      setSuggestions(foundSuggestions);
      setIsGenerating(false);
    }, 1000);
  };

  const copyToClipboard = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(-1), 2000);
  };

  return (
    <div className="glass p-6 rounded-xl">
      <div className="flex items-center gap-2 mb-4">
        <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
          <FiZap className="w-5 h-5 text-white" />
        </div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          AI Writing Assistant
        </h3>
      </div>

      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
        Transform weak bullet points into powerful achievement statements
      </p>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Your Current Statement
          </label>
          <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="e.g., 'managed team' or 'worked on project'"
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition resize-none"
            rows="3"
          />
        </div>

        <motion.button
          onClick={generateSuggestions}
          disabled={!inputText || isGenerating}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-medium transition ${
            !inputText || isGenerating
              ? "bg-gray-300 dark:bg-gray-700 text-gray-500 cursor-not-allowed"
              : "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-lg"
          }`}
        >
          {isGenerating ? (
            <>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              >
                <FiRefreshCw className="w-5 h-5" />
              </motion.div>
              <span>Generating...</span>
            </>
          ) : (
            <>
              <FiZap className="w-5 h-5" />
              <span>Generate Better Versions</span>
            </>
          )}
        </motion.button>

        <AnimatePresence>
          {suggestions.length > 0 && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="space-y-3 overflow-hidden"
            >
              <div className="flex items-center gap-2 pt-2">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent" />
                <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                  AI SUGGESTIONS
                </span>
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent" />
              </div>

              {suggestions.map((suggestion, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative p-4 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border border-purple-200 dark:border-purple-800 rounded-lg group"
                >
                  <p className="text-sm text-gray-700 dark:text-gray-300 pr-10">
                    {suggestion}
                  </p>
                  <motion.button
                    onClick={() => copyToClipboard(suggestion, index)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="absolute top-4 right-4 p-2 rounded-lg bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition"
                  >
                    {copiedIndex === index ? (
                      <FiCheck className="w-4 h-4 text-green-600" />
                    ) : (
                      <FiCopy className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                    )}
                  </motion.button>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AIWritingAssistant;
