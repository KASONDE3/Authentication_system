const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const PORT = process.env.PORT || 5000;

dotenv.config(); // Load environment variables from .env

const app = express();

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the "frontend" directory
app.use(express.static(path.join(__dirname, '../frontend')));

// Example API route (adjust as per your `auth.js` file)
const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

// Route for serving the main index.html file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
