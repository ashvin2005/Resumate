// components/ResumeTemplates.jsx
import { motion } from "framer-motion";
import { FiDownload, FiEye } from "react-icons/fi";

const ResumeTemplates = () => {
  const templates = [
    {
      id: 1,
      name: "Professional",
      description: "Clean and modern design perfect for corporate roles",
      color: "from-blue-500 to-blue-600",
      preview: "📄",
    },
    {
      id: 2,
      name: "Creative",
      description: "Stand out with bold colors and unique layout",
      color: "from-purple-500 to-pink-600",
      preview: "🎨",
    },
    {
      id: 3,
      name: "Minimalist",
      description: "Simple and elegant, focuses on content",
      color: "from-gray-500 to-gray-600",
      preview: "📋",
    },
    {
      id: 4,
      name: "Technical",
      description: "Ideal for developers and tech professionals",
      color: "from-green-500 to-teal-600",
      preview: "💻",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass p-6 rounded-xl"
    >
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            Resume Templates
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Download professional templates
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {templates.map((template, index) => (
          <motion.div
            key={template.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="relative p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-500 transition cursor-pointer group"
          >
            {/* Gradient Background */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${template.color} opacity-5 rounded-lg`}
            />

            {/* Content */}
            <div className="relative">
              <div className="text-4xl mb-2">{template.preview}</div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                {template.name}
              </h4>
              <p className="text-xs text-gray-600 dark:text-gray-400 mb-3">
                {template.description}
              </p>

              {/* Actions */}
              <div className="flex gap-2">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 flex items-center justify-center gap-1 px-3 py-1.5 bg-blue-600 dark:bg-blue-500 text-white text-xs font-medium rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition"
                >
                  <FiDownload className="w-3 h-3" />
                  Download
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition"
                >
                  <FiEye className="w-3 h-3" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Coming Soon Badge */}
      <div className="mt-4 text-center">
        <span className="inline-block px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 text-xs font-medium rounded-full">
          🚀 More templates coming soon!
        </span>
      </div>
    </motion.div>
  );
};

export default ResumeTemplates;
