require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middleware setup
app.use(bodyParser.json()); // Parses incoming JSON requests
app.use(cors()); // Enables CORS

const mongoURI = process.env.MONGO_URI;

// Connect to MongoDB
mongoose.connect(mongoURI)
  .then(() => {
    console.log('Database Conntected Successfully!!!');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err.message);
  });
// Default route
app.get('/', (req, res) => {
  res.send('Hello Arslan!');
});

// Start the server
const port = process.env.PORT;
app.listen(port, () => console.log(`Server is running on port ${port}!`));
