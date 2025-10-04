const express = require('express');
const router = express.Router();
const { body } = require('express-validator');

const authController = require('../controllers/authController');
const { authMiddleware } = require('../middleware/auth');
const permit = require('../middleware/permit');

// Public route - login
router.post('/login',
  [
    body('email').isEmail().withMessage('Valid email required'),
    body('password').notEmpty().withMessage('Password required')
  ],
  authController.login
);

// Protected route: create user (only superadmin can create admin/vendor)
router.post('/register',
  authMiddleware, 
  permit('superadmin'),
  [
    body('email').isEmail(),
    body('password').isLength({ min: 6 }),
    body('role').isIn(['superadmin','admin','vendor']).optional()
  ],
  authController.register
);

// Get current user
router.get('/me', authMiddleware, authController.getMe);

module.exports = router;
