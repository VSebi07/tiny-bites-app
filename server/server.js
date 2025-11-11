/* IMPORTS */
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');

const recipeRoutes = require('./routes/recipeRoutes');
const categoryRoutes = require('./routes/categoryRoutes');

const Unit = require('./models/Unit');

/* .ENV DATA */
require('dotenv').config();

const app = express();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '_' + file.originalname)
  }
});

/* MIDDLEWARE */
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cors());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const upload = multer({ storage });

/* ROUTE-HANDLING */
app.use('/api/recipes', recipeRoutes);
app.use('/api/category', categoryRoutes);

app.post('/api/upload', upload.single('image'), (req, res) => {
  if (!req.file) return res.status(400).json({ error: 'No file uploaded!' });
  const filePath = `/uploads/${req.file.filename}`;
  res.status(200).json({ path: filePath });
});

app.get('/api/unit', async (req, res) => {
  try {
    const unit = await Unit.find();
    if (unit) res.json(unit).status(200);
  } catch (e) {
    res.status(400).json({error: e.message})
  }
});

app.post('/api/unit', async (req, res) => {
  try {
    const unit = await Unit.create(req.body);
    res.status(200).json(unit);
  } catch (e) {
    res.status(400).json({error: e.message})
  }
})


/* DB CONNECTION */
mongoose.connect(process.env.MONGODB_CONN_URI)
  .then(() => {
    console.log('connected to db');
    app.listen(process.env.PORT, () => console.log(`server running on port ${process.env.PORT}`))
  })
  .catch((err) => console.log(err));