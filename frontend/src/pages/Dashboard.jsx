import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import ResumeUpload from "../components/ResumeUpload";
import AnalysisResult from "../components/AnalysisResult";
import { motion, AnimatePresence } from "framer-motion";
import ResumeAnalyzer from "../components/ResumeAnalyzer";
import LiveResumeTips from "../components/LiveResumeTips";
import KeyboardShortcuts from "../components/KeyboardShortcuts";
import ExportReport from "../components/ExportReport";
import AIWritingAssistant from "../components/AIWritingAssistant";
import InterviewPrepTips from "../components/InterviewPrepTips";

const Dashboard = () => {
  const [analysis, setAnalysis] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const uploadRef = useRef(null);

  const handleUploadShortcut = () => {
    uploadRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleHistoryShortcut = () => {
    navigate('/history');
  };

  const handleDashboardShortcut = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12 pt-3">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-gray-900 dark:text-white mb-3"
          >
            AI-Powered Resume Analysis
          </motion.h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Get instant feedback on your resume's strengths, weaknesses, and areas
            for improvement.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Upload Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2"
            ref={uploadRef}
          >
            <div className="glass rounded-xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700">
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900/30 mr-4">
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
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      ></path>
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                    Upload Your Resume
                  </h2>
                </div>

              <ResumeUpload
                setAnalysis={setAnalysis}
                setIsLoading={setIsLoading}
              />
            </div>
          </div>
        </motion.div>

        {/* Stats Sidebar */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="lg:col-span-1"
        >
          <div className="glass rounded-xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700 h-full">
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
                Resume Insights
              </h3>

              <div className="space-y-4">
                <div className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg border border-blue-100 dark:border-blue-800">
                  <div className="flex items-center">
                    <div className="p-2 rounded-full bg-blue-100 dark:bg-blue-800 mr-3">
                      <svg
                        className="w-5 h-5 text-blue-600 dark:text-blue-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Success Rate</p>
                      <p className="font-bold text-gray-800 dark:text-white">
                        94% of resumes improved
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-green-50 dark:bg-green-900/30 rounded-lg border border-green-100 dark:border-green-800">
                  <div className="flex items-center">
                    <div className="p-2 rounded-full bg-green-100 dark:bg-green-800 mr-3">
                      <svg
                        className="w-5 h-5 text-green-600 dark:text-green-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Average Score Increase
                      </p>
                      <p className="font-bold text-gray-800 dark:text-white">+37 points</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-purple-50 dark:bg-purple-900/30 rounded-lg border border-purple-100 dark:border-purple-800">
                  <div className="flex items-center">
                    <div className="p-2 rounded-full bg-purple-100 dark:bg-purple-800 mr-3">
                      <svg
                        className="w-5 h-5 text-purple-600 dark:text-purple-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Avg. Analysis Time
                      </p>
                      <p className="font-bold text-gray-800 dark:text-white">15 seconds</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Live Resume Tips */}
              <div className="mt-6">
                <LiveResumeTips />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Analysis Results */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="mt-8 flex justify-center"
          >
            <div className="p-8 glass rounded-xl shadow-lg w-full max-w-4xl text-center">
              <div className="animate-pulse flex flex-col items-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-8 h-8 text-blue-600 dark:text-blue-400 animate-spin"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-gray-800 dark:text-white mb-2">
                  Analyzing Your Resume
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Our AI is carefully reviewing your document...
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {analysis && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-8"
          >
            <div className="flex justify-end mb-4">
              <ExportReport analysisData={analysis} fileName="resume-analysis" />
            </div>
            <AnalysisResult analysis={analysis} />
          </motion.div>
        )}
      </AnimatePresence>

      <ResumeAnalyzer />

      {/* AI Tools Section */}
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <AIWritingAssistant />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <InterviewPrepTips />
        </motion.div>
      </div>

      {/* Keyboard Shortcuts */}
      <KeyboardShortcuts
        onUpload={handleUploadShortcut}
        onHistory={handleHistoryShortcut}
        onDashboard={handleDashboardShortcut}
      />
      </div>
    </div>
  );
};

export default Dashboard;
