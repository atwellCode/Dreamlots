const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./db/dbConnection.db');
const propertyRoutes = require('./Routes/property.Routes');
const userRoutes = require('./Routes/user.Routes');
const commentRoutes = require('./Routes/comment.Routes')

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

// Connect to MongoDB
connectDB();

// Routes
app.use("/property", propertyRoutes);
app.use("/user", userRoutes);
app.use("/comment", commentRoutes);


// Define the port from .env file or fallback to 3000
const port = process.env.PORT || 3005;
app.listen(port, () => {
  console.log(`The server is running on port ${port}`);
});
