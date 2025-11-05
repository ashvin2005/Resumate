// components/QuickActions.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiUpload, FiClock, FiBarChart2, FiPlus, FiX } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const QuickActions = ({ onUploadClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const actions = [
    {
      icon: FiUpload,
      label: "Upload Resume",
      color: "from-blue-500 to-blue-600",
      onClick: () => {
        onUploadClick?.();
        setIsOpen(false);
      },
    },
    {
      icon: FiClock,
      label: "View History",
      color: "from-purple-500 to-purple-600",
      onClick: () => {
        navigate("/history");
        setIsOpen(false);
      },
    },
    {
      icon: FiBarChart2,
      label: "Dashboard",
      color: "from-green-500 to-green-600",
      onClick: () => {
        navigate("/dashboard");
        setIsOpen(false);
      },
    },
  ];

  return (
    <div className="fixed bottom-20 right-6 z-40">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="absolute bottom-16 right-0 space-y-3"
          >
            {actions.map((action, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ delay: index * 0.05 }}
                onClick={action.onClick}
                className={`flex items-center gap-3 px-4 py-3 bg-gradient-to-r ${action.color} text-white rounded-lg shadow-lg hover:shadow-xl transition group`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <action.icon className="w-5 h-5" />
                <span className="font-medium whitespace-nowrap">{action.label}</span>
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition ${
          isOpen ? "rotate-45" : ""
        }`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ rotate: isOpen ? 45 : 0 }}
      >
        {isOpen ? <FiX className="w-6 h-6" /> : <FiPlus className="w-6 h-6" />}
      </motion.button>
    </div>
  );
};

export default QuickActions;
