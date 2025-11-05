import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-sm dark:shadow-gray-800 sticky top-0 z-50 backdrop-blur-lg bg-opacity-90 dark:bg-opacity-90">
      <div className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2 group">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center shadow-md"
            >
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </motion.div>
            <span className="text-xl font-bold gradient-text group-hover:scale-105 transition-transform">
              Resumate
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 dark:text-blue-400 font-medium relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-600 dark:after:bg-blue-400"
                  : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 dark:after:bg-blue-400 after:transition-all hover:after:w-full"
              }
            >
              Dashboard
            </NavLink>
            <NavLink
              to="/history"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 dark:text-blue-400 font-medium relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-600 dark:after:bg-blue-400"
                  : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 dark:after:bg-blue-400 after:transition-all hover:after:w-full"
              }
            >
              History
            </NavLink>
            <NavLink
              to="/pricing"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 dark:text-blue-400 font-medium relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-600 dark:after:bg-blue-400"
                  : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 dark:after:bg-blue-400 after:transition-all hover:after:w-full"
              }
            >
              Pricing
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 dark:text-blue-400 font-medium relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-600 dark:after:bg-blue-400"
                  : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 dark:after:bg-blue-400 after:transition-all hover:after:w-full"
              }
            >
              About
            </NavLink>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link to="/signin">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 text-blue-600 dark:text-blue-400 font-medium hover:bg-blue-50 dark:hover:bg-gray-800 rounded-lg transition"
              >
                Sign In
              </motion.button>
            </Link>
            <Link to="/signup">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg hover:shadow-lg transition shadow-md btn-glow"
              >
                Sign Up
              </motion.button>
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-4 pb-4 space-y-4 overflow-hidden"
            >
              <NavLink
                to="/dashboard"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              >
                Dashboard
              </NavLink>
              <NavLink
                to="/history"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              >
                History
              </NavLink>
              <NavLink
                to="/pricing"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              >
                Pricing
              </NavLink>
              <NavLink
                to="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              >
                About
              </NavLink>
              <div className="pt-4 border-t border-gray-200 dark:border-gray-700 space-y-3">
                <Link to="/signin" className="block" onClick={() => setMobileMenuOpen(false)}>
                  <button className="w-full px-4 py-2 text-blue-600 dark:text-blue-400 font-medium hover:bg-blue-50 dark:hover:bg-gray-800 rounded-lg transition">
                    Sign In
                  </button>
                </Link>
                <Link to="/signup" className="block" onClick={() => setMobileMenuOpen(false)}>
                  <button className="w-full px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg hover:shadow-lg transition shadow-md">
                    Sign Up
                  </button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
