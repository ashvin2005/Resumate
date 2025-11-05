import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { getResumes, deleteResume } from "../services/api";
import { FiSearch, FiTrash2, FiCalendar, FiFilter } from "react-icons/fi";

const History = () => {
  const [resumes, setResumes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("newest"); // newest, oldest, name

  useEffect(() => {
    const fetchResumes = async () => {
      try {
        const response = await getResumes();
        setResumes(response.data);
      } catch (error) {
        console.error("Error fetching resumes:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchResumes();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this resume?")) return;
    try {
      await deleteResume(id);
      setResumes(resumes.filter((resume) => resume._id !== id));
    } catch (error) {
      console.error("Error deleting resume:", error);
    }
  };

  const filteredResumes = resumes
    .filter((resume) =>
      resume.filename.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      switch (sortBy) {
        case "newest":
          return new Date(b.uploadedAt) - new Date(a.uploadedAt);
        case "oldest":
          return new Date(a.uploadedAt) - new Date(b.uploadedAt);
        case "name":
          return a.filename.localeCompare(b.filename);
        default:
          return 0;
      }
    });

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20 px-4">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Resume History
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            View and manage your uploaded resumes
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-6 flex flex-col sm:flex-row gap-4"
        >
          <div className="relative flex-1">
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search resumes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />
          </div>

          <div className="relative">
            <FiFilter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition appearance-none cursor-pointer"
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
              <option value="name">Name (A-Z)</option>
            </select>
          </div>
        </motion.div>

        {loading ? (
          <div className="space-y-4 animate-pulse">
            <div className="h-20 bg-gray-200 dark:bg-gray-700 rounded-lg" />
            <div className="h-20 bg-gray-200 dark:bg-gray-700 rounded-lg" />
            <div className="h-20 bg-gray-200 dark:bg-gray-700 rounded-lg" />
          </div>
        ) : filteredResumes.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12 glass rounded-xl"
          >
            <div className="text-6xl mb-4">📄</div>
            <p className="text-gray-500 dark:text-gray-400 text-lg mb-2">
              {searchQuery ? "No resumes match your search" : "No resumes found"}
            </p>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Clear search
              </button>
            )}
          </motion.div>
        ) : (
          <>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-sm text-gray-600 dark:text-gray-400 mb-4"
            >
              Showing {filteredResumes.length} of {resumes.length} resume(s)
            </motion.p>
            <div className="space-y-6">
              {filteredResumes.map((resume, index) => (
                <motion.div
                  key={resume._id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="glass border border-gray-200 dark:border-gray-700 p-5 rounded-xl shadow-md hover:shadow-lg transition-all card-hover"
                >
                  <div className="flex justify-between items-start flex-col sm:flex-row sm:items-center gap-4">
                    <div className="flex items-start gap-3 flex-1">
                      <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                        <svg
                          className="w-6 h-6 text-blue-600 dark:text-blue-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                          {resume.filename}
                        </h3>
                        <div className="flex items-center gap-2 mt-1 text-sm text-gray-500 dark:text-gray-400">
                          <FiCalendar className="w-4 h-4" />
                          <span>
                            {new Date(resume.uploadedAt).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                          </span>
                        </div>
                      </div>
                    </div>
                    <motion.button
                      onClick={() => handleDelete(resume._id)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 text-sm font-medium bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-200 rounded-lg hover:bg-red-200 dark:hover:bg-red-800 transition-colors"
                    >
                      <FiTrash2 className="w-4 h-4" />
                      Delete
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default History;
