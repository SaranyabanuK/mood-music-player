const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const DATA_FILE = path.join(__dirname, 'moods.json');

// Get all moods
app.get('/api/moods', (req, res) => {
  const data = JSON.parse(fs.readFileSync(DATA_FILE));
  res.json(Object.keys(data));
});

// Get playlist for a mood
app.get('/api/playlist/:mood', (req, res) => {
  const data = JSON.parse(fs.readFileSync(DATA_FILE));
  const mood = req.params.mood.toLowerCase();

  if (data[mood]) {
    res.json(data[mood]);
  } else {
    res.status(404).json({ message: 'Mood not found' });
  }
});

const PORT = 3000;
app.listen(PORT);
