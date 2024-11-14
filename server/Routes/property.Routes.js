const express = require('express');
const router = express.Router();
const propertyController = require('../Controllers/property.Controller');
const upload = require('../Middleware/upload');

// Routes for property operations

// Add a new property with image uploads
router.post('/add', upload,propertyController.addProperty);

// Get all properties
router.get('/get', propertyController.getAllProperties);

// Get a property by ID
router.get('/:id', propertyController.getPropertyById);

// Update a property by ID (with new images if provided)
router.put('/update/:id', propertyController.updatePropertyById);

// Delete a property by ID
router.delete('/delete/:id', propertyController.deletePropertyById);

module.exports = router;
