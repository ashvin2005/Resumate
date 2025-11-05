import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import TestimonialSlider from "../components/TestimonialSlider";
import AnimatedCounter from "../components/AnimatedCounter";
import QuickActions from "../components/QuickActions";

const Home = () => {
  const navigate = useNavigate();
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <section className="py-20 px-4 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 dark:bg-blue-600/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-400/10 dark:bg-indigo-600/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
              className="inline-block mb-4"
            >
              <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 rounded-full text-sm font-semibold">
                ✨ Powered by AI
              </span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              <span className="gradient-text animate-gradient-x">
                AI-Powered
              </span>{" "}
              <br className="md:hidden" />
              Resume Analysis
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10">
              Get instant feedback on your resume's strengths, weaknesses, and
              areas for improvement with our advanced AI technology.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/dashboard"
                  className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg hover:shadow-lg transition shadow-md text-center inline-block btn-glow"
                >
                  Analyze Your Resume
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/pricing"
                  className="px-8 py-3 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 font-medium rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition text-center inline-block"
                >
                  See Pricing
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-blue-900 dark:to-indigo-900 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-white"
            >
              <p className="text-4xl font-bold mb-2">
                <AnimatedCounter target={12500} />+
              </p>
              <p className="text-blue-100 text-sm uppercase tracking-wider">
                Resumes Analyzed
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-white"
            >
              <p className="text-4xl font-bold mb-2">
                <AnimatedCounter target={87} />%
              </p>
              <p className="text-blue-100 text-sm uppercase tracking-wider">
                Interview Rate Increase
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-white"
            >
              <p className="text-4xl font-bold mb-2">
                <AnimatedCounter target={4200} />+
              </p>
              <p className="text-blue-100 text-sm uppercase tracking-wider">
                Users Hired
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              viewport={{ once: true }}
              className="text-white"
            >
              <p className="text-4xl font-bold mb-2">
                <AnimatedCounter target={45} />+
              </p>
              <p className="text-blue-100 text-sm uppercase tracking-wider">
                Countries
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12"
          >
            Why Choose Resumate?
          </motion.h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
              className="glass p-8 rounded-xl card-hover"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 rounded-lg flex items-center justify-center mb-6">
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
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 dark:text-white">
                AI-Powered Analysis
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Our advanced algorithms evaluate your resume against industry
                standards and provide actionable feedback.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
              className="glass p-8 rounded-xl card-hover"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 dark:from-green-900 dark:to-green-800 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-green-600 dark:text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 dark:text-white">Instant Results</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Get detailed feedback in seconds, not days. No waiting for human
                reviewers.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
              className="glass p-8 rounded-xl card-hover"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900 dark:to-purple-800 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-purple-600 dark:text-purple-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 dark:text-white">ATS Optimization</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Ensure your resume passes through Applicant Tracking Systems
                with flying colors.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-3xl font-bold text-white mb-6"
          >
            Ready to improve your resume?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-blue-100 mb-8"
          >
            Join thousands of professionals who've boosted their interview
            chances with our AI analyzer.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Link
              to="/dashboard"
              className="inline-block px-8 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-gray-100 transition shadow-lg"
            >
              Get Started for Free
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12"
          >
            How Resumate Works
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Upload Your Resume",
                description:
                  "Simply drag and drop your PDF resume or select it from your files",
                icon: "📤",
              },
              {
                step: "2",
                title: "AI Analysis",
                description:
                  "Our system scans your resume against 50+ key metrics in seconds",
                icon: "🤖",
              },
              {
                step: "3",
                title: "Get Actionable Feedback",
                description:
                  "Receive detailed suggestions to improve your resume's effectiveness",
                icon: "📝",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl text-center"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <div className="w-12 h-12 bg-blue-600 dark:bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-3xl font-bold text-gray-900 dark:text-white mb-2"
          >
            Trusted by Professionals
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto"
          >
            Join thousands who've improved their job prospects
          </motion.p>
          <TestimonialSlider />
        </div>
      </section>

      <QuickActions onUploadClick={() => navigate('/dashboard')} />
    </div>
  );
};

export default Home;
