// Run: node utils/seedAdmin.js
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const User = require('../models/User');
const connectDB = require('../config/db');

const run = async () => {
  try {
    await connectDB();
    const email = process.env.SUPERADMIN_EMAIL;
    const password = process.env.SUPERADMIN_PASSWORD;
    if (!email || !password) {
      console.error('SUPERADMIN_EMAIL and SUPERADMIN_PASSWORD must be set in .env');
      process.exit(1);
    }
    const existing = await User.findOne({ email: email.toLowerCase() });
    if (existing) {
      console.log('Superadmin already exists:', existing.email);
      process.exit(0);
    }
    const user = new User({ name: 'Super Admin', email: email.toLowerCase(), password, role: 'superadmin' });
    await user.save();
    console.log('Superadmin created:', user.email);
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

run();
