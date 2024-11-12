const express = require('express');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '..', '.env') });
const baseUrl = process.env.BASE_URL;
const PORT = process.env.PORT || 3000;

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

app.listen(PORT, () => {
  console.log(`Server running on ${baseUrl}:${PORT}`);
}).on('error', (err) => {
  console.error('Server failed to start:', err);
});