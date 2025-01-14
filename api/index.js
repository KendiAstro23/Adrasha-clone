// api/index.js

const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const path = require('path');
const { getProductById } = require('./products'); // Import the function from products.js

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use('/images', express.static(path.join(__dirname, 'images')));  // Serve images

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the Products API');
});

// Route to get product by ID
app.get('/api/products/:id', (req, res) => {
  const product = getProductById(req.params.id); // Get product by ID using the imported function
  if (product) {
    res.json(product);
  } else {
    res.status(404).send('Product not found');
  }
});

// Export the API for Firebase functions
exports.api = functions.https.onRequest(app);
