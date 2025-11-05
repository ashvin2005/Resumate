import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "tailwindcss";

export default defineConfig({
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class", // Enable dark mode with class strategy
  theme: {
    extend: {
      colors: {
        "resume-blue": "#2563eb",
        "analysis-green": "#16a34a",
        "warning-yellow": "#d97706",
        primary: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
        },
      },
      animation: {
        "gradient-x": "gradient-x 6s ease infinite",
        "fade-in": "fade-in 0.5s ease-out",
        "fade-in-up": "fade-in-up 0.6s ease-out",
        "slide-in-right": "slide-in-right 0.5s ease-out",
        "slide-in-left": "slide-in-left 0.5s ease-out",
        "bounce-slow": "bounce 3s infinite",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 3s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite",
      },
      keyframes: {
        "gradient-x": {
          "0%, 100%": {
            "background-position": "0% 50%",
          },
          "50%": {
            "background-position": "100% 50%",
          },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "slide-in-right": {
          "0%": {
            opacity: "0",
            transform: "translateX(-20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        "slide-in-left": {
          "0%": {
            opacity: "0",
            transform: "translateX(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "glow": {
          "0%, 100%": {
            "box-shadow": "0 0 20px rgba(59, 130, 246, 0.5)",
          },
          "50%": {
            "box-shadow": "0 0 40px rgba(59, 130, 246, 0.8)",
          },
        },
      },
      boxShadow: {
        "glow-sm": "0 0 10px rgba(59, 130, 246, 0.3)",
        "glow-md": "0 0 20px rgba(59, 130, 246, 0.4)",
        "glow-lg": "0 0 30px rgba(59, 130, 246, 0.5)",
        "dark-lg": "0 10px 15px -3px rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [
    // No need for tailwindcss() here - it goes in vite.config.js instead
  ],
});
