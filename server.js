const express = require('express');
const path = require('path');

const app = express();

// Serve static files (CSS and images) from the root directory
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/images', express.static(path.join(__dirname, 'images')));

// Define routes for HTML pages
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, './public/about.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, './public/contact.html'));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});