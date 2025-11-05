// components/KeyboardShortcuts.jsx
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiCommand, FiX } from "react-icons/fi";

const KeyboardShortcuts = ({ onUpload, onHistory, onDashboard }) => {
  const [showHelp, setShowHelp] = useState(false);

  const shortcuts = [
    { key: "U", description: "Upload Resume", action: onUpload },
    { key: "H", description: "View History", action: onHistory },
    { key: "D", description: "Go to Dashboard", action: onDashboard },
    { key: "?", description: "Show Shortcuts", action: () => setShowHelp(true) },
  ];

  useEffect(() => {
    const handleKeyPress = (e) => {
      // Only trigger if not typing in an input
      if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;

      switch (e.key.toLowerCase()) {
        case "u":
          if (e.ctrlKey || e.metaKey) {
            e.preventDefault();
            onUpload?.();
          }
          break;
        case "h":
          if (e.ctrlKey || e.metaKey) {
            e.preventDefault();
            onHistory?.();
          }
          break;
        case "d":
          if (e.ctrlKey || e.metaKey) {
            e.preventDefault();
            onDashboard?.();
          }
          break;
        case "?":
          if (e.shiftKey) {
            e.preventDefault();
            setShowHelp(true);
          }
          break;
        case "escape":
          setShowHelp(false);
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [onUpload, onHistory, onDashboard]);

  return (
    <>
      {/* Help Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setShowHelp(true)}
        className="fixed bottom-6 right-6 w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition z-40"
        aria-label="Show keyboard shortcuts"
      >
        <FiCommand className="w-6 h-6" />
      </motion.button>

      {/* Shortcuts Modal */}
      <AnimatePresence>
        {showHelp && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowHelp(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-2xl z-50 p-6"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                    <FiCommand className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    Keyboard Shortcuts
                  </h3>
                </div>
                <button
                  onClick={() => setShowHelp(false)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition"
                >
                  <FiX className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                </button>
              </div>

              {/* Shortcuts List */}
              <div className="space-y-3">
                {shortcuts.map((shortcut, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-gray-700/50"
                  >
                    <span className="text-gray-700 dark:text-gray-300">
                      {shortcut.description}
                    </span>
                    <div className="flex items-center gap-1">
                      <kbd className="px-2 py-1 text-xs font-semibold bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded shadow-sm">
                        {shortcut.key === "?" ? "Shift" : "Ctrl"}
                      </kbd>
                      {shortcut.key !== "?" && (
                        <>
                          <span className="text-gray-400">+</span>
                          <kbd className="px-2 py-1 text-xs font-semibold bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded shadow-sm">
                            {shortcut.key}
                          </kbd>
                        </>
                      )}
                      {shortcut.key === "?" && (
                        <>
                          <span className="text-gray-400">+</span>
                          <kbd className="px-2 py-1 text-xs font-semibold bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded shadow-sm">
                            ?
                          </kbd>
                        </>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Footer */}
              <p className="mt-4 text-xs text-center text-gray-500 dark:text-gray-400">
                Press <kbd className="px-1 py-0.5 bg-gray-200 dark:bg-gray-700 rounded">ESC</kbd> to close
              </p>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default KeyboardShortcuts;
