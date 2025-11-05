// routes/authRoutes.js
const express = require("express");
const router = express.Router();
const {
  signup,
  signin,
  getMe,
  logout,
  forgotPassword,
  resetPassword,
  updateDetails,
  updatePassword,
} = require("../controllers/authController");
const { protect } = require("../middleware/auth");

// Public routes
router.post("/signup", signup);
router.post("/signin", signin);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);

// Protected routes (require authentication)
router.get("/me", protect, getMe);
router.post("/logout", protect, logout);
router.put("/update-details", protect, updateDetails);
router.put("/update-password", protect, updatePassword);

module.exports = router;
