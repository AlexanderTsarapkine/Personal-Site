const express = require('express');
const path = require('path');
const constants = require('./config/constants'); // Import constants

const app = express();

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Route to serve HTML files from views directory
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/dumpster', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'aboutMe.html'));
});

app.all('*', (req, res) => {
  res.redirect('/');
});

// Use constants for settings, e.g., PORT
app.listen(constants.PORT, () => console.log(`Server running on http://localhost:${constants.PORT}`));
