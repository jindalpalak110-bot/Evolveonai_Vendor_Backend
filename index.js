const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const menuRoutes = require("./routes/menuRoutes");
const authRoutes = require('./routes/auth');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

app.get('/', (req, res) => res.send('Backend running'));


app.use('/api/v1/auth', authRoutes);
app.use("/api/menu", menuRoutes);

// Example protected test routes (optional)
const { authMiddleware } = require('./middleware/auth');
const permit = require('./middleware/permit');

app.get('/api/v1/admin', authMiddleware, permit('superadmin','admin'), (req,res) => {
  res.json({ msg: 'hello admin or superadmin', user: req.user });
});
app.get('/api/v1/vendor', authMiddleware, permit('vendor'), (req,res) => {
  res.json({ msg: 'hello vendor', user: req.user });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
