// routes/menuRoutes.js
const express = require("express");
const router = express.Router();
const menuConfig = require("../utils/menuConfig");
const { authMiddleware } = require("../middleware/auth");

// GET /api/menu
router.get("/", authMiddleware, (req, res) => {
  try {
    const role = req.user.role; // role is decoded from JWT in authMiddleware
    const menu = menuConfig[role] || [];

    return res.json({
      role,
      menu,
    });
  } catch (error) {
    return res.status(500).json({ message: "Failed to fetch menu" });
  }
});

module.exports = router;
