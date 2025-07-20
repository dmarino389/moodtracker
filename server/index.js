// server/index.js
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Temporary in-memory "database"
let moods = [];

app.get('/api/moods', (req, res) => {
  res.json(moods);
});

app.post('/api/moods', (req, res) => {
  const { mood, note } = req.body;
  const newEntry = { mood, note, date: new Date().toISOString() };
  moods.push(newEntry);
  res.status(201).json(newEntry);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
