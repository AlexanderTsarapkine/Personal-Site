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

app.all('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', '404.html'));
});

// Use constants for settings, e.g., PORT
app.listen(constants.PORT, () => console.log(`Server running on http://localhost:${constants.PORT}`));
