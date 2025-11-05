import {
  FaEnvelope,
  FaPhoneAlt,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaHeart,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/ashvin-tiwari/", label: "LinkedIn", color: "hover:text-blue-500" },
    { icon: FaGithub, href: "https://github.com/ashvin2005", label: "GitHub", color: "hover:text-gray-400" },
    { icon: FaTwitter, href: "https://x.com/home", label: "Twitter", color: "hover:text-sky-400" },
    { icon: FaFacebookF, href: "https://www.facebook.com/", label: "Facebook", color: "hover:text-blue-400" },
  ];

  return (
    <footer className="bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-white py-16 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-pattern"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-blue-600"
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
              </div>
              <h3 className="text-2xl font-bold tracking-wide">Resumate</h3>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              AI-powered resume analysis to help you land your dream job.
              Improve, optimize, and stand out.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {[
                { to: "/dashboard", label: "Dashboard" },
                { to: "/pricing", label: "Pricing" },
                { to: "/about", label: "About Us" },
                { to: "/history", label: "History" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="hover:text-blue-300 transition-all duration-200 inline-block hover:translate-x-1"
                  >
                    → {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              {[
                { href: "https://www.indeed.com/career-advice/resumes-cover-letters", label: "Resume Writing Tips" },
                { href: "https://www.linkedin.com/help/linkedin/answer/a507663", label: "LinkedIn Profile Guide" },
                { href: "https://www.themuse.com/advice/resume-mistakes", label: "Common Resume Mistakes" },
                { href: "https://resumegenius.com/resume-templates", label: "Resume Templates" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-blue-300 transition-all duration-200 inline-block hover:translate-x-1"
                  >
                    → {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-gray-300 hover:text-white transition">
                <FaEnvelope className="text-blue-400" />
                <a href="mailto:ashvintiwari161@gmail.com">ashvintiwari161@gmail.com</a>
              </li>
              <li className="flex items-center gap-2 text-gray-300 hover:text-white transition">
                <FaPhoneAlt className="text-blue-400" />
                <a href="tel:+916969696969">+91 6969696969</a>
              </li>
            </ul>

            <div className="flex gap-3 mt-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className={`p-2 bg-white/10 rounded-lg ${social.color} transition-all hover:bg-white/20`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon className="text-lg" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-blue-600/30 dark:border-gray-700 mt-12 pt-8 text-center"
        >
          <p className="text-sm text-blue-100 dark:text-gray-400">
            &copy; {currentYear}{" "}
            <span className="font-semibold text-white">Resumate</span>. All rights
            reserved.
          </p>
          <p className="text-xs text-blue-200 dark:text-gray-500 mt-2 flex items-center justify-center gap-1">
            Built with <FaHeart className="text-red-500 animate-pulse" /> for Job Seekers
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
