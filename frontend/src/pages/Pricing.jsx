// pages/Pricing.jsx
import { motion } from "framer-motion";
import { FiCheck, FiStar } from "react-icons/fi";

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: "Free",
      icon: "🚀",
      features: [
        "1 Resume Analysis",
        "Basic Feedback",
        "Score Breakdown",
        "Limited History",
      ],
    },
    {
      name: "Pro",
      price: "$9.99",
      period: "/month",
      popular: true,
      icon: "⚡",
      features: [
        "Unlimited Analyses",
        "Detailed Feedback",
        "ATS Optimization",
        "Full History Access",
        "Priority Support",
      ],
    },
    {
      name: "Enterprise",
      price: "Custom",
      icon: "👑",
      features: [
        "Everything in Pro",
        "Team Management",
        "API Access",
        "Dedicated Account Manager",
        "Custom Workflows",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 rounded-full text-sm font-semibold mb-4"
          >
            💎 Pricing Plans
          </motion.span>
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Choose the plan that works best for your career needs
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`relative glass rounded-2xl overflow-hidden ${
                plan.popular
                  ? "ring-2 ring-blue-500 dark:ring-blue-400 transform md:-translate-y-4 shadow-xl"
                  : "shadow-lg"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0">
                  <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-1 text-sm font-medium flex items-center gap-1 rounded-bl-lg">
                    <FiStar className="w-4 h-4" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="p-8">
                {/* Icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
                  className="text-5xl mb-4"
                >
                  {plan.icon}
                </motion.div>

                {/* Plan Name */}
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {plan.name}
                </h3>

                {/* Price */}
                <div className="mb-6">
                  <span className="text-5xl font-bold gradient-text">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-gray-600 dark:text-gray-400 ml-1">
                      {plan.period}
                    </span>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + i * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mt-0.5">
                        <FiCheck className="w-3 h-3 text-green-600 dark:text-green-400" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">
                        {feature}
                      </span>
                    </motion.li>
                  ))}
                </ul>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-3 px-6 rounded-lg font-medium transition-all ${
                    plan.popular
                      ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:shadow-lg btn-glow"
                      : "border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20"
                  }`}
                >
                  {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Have questions?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            We're here to help! Contact us for any pricing inquiries.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg hover:shadow-lg transition"
          >
            Contact Support
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Pricing;
