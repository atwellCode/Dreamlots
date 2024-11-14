const Property = require('../Models/property.Model');
const multer = require('multer');
const path = require('path');

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Save files to 'uploads' folder
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    const fileTypes = /jpeg|jpg|png/;
    const extName = fileTypes.test(path.extname(file.originalname).toLowerCase());
    const mimeType = fileTypes.test(file.mimetype);
    if (extName && mimeType) {
      return cb(null, true);
    }
    cb(new Error('Only images (jpeg, jpg, png) are allowed'));
  }
}).array('images', 5); // Maximum of 5 images

// Controller functions

// Add a new property
exports.addProperty = async (req, res) => {
    try {
      const {
        propertyName,
        propertyType,
        propertyLocation,
        city,
        street,
        address,
        price,
        areaSize,
        bedrooms,
        bathrooms,
        floors,
        description,
        amenities,
      } = req.body;
  
      // Check if files were uploaded
      const garageImages = req.files?.garageImage?.map(file => file.filename) || [];
      const virtualTourImages = req.files?.virtualTourImage?.map(file => file.filename) || [];
  
      // Parse amenities if needed
      const amenitiesParsed = typeof amenities === "string" ? JSON.parse(amenities) : amenities;
  
      const newProperty = new Property({
        propertyName,
        propertyType,
        propertyLocation,
        city,
        street,
        address,
        price,
        areaSize,
        bedrooms,
        bathrooms,
        floors,
        description,
        amenities: amenitiesParsed,
        garageImage: garageImages,
        virtualTourImage: virtualTourImages,
      });
  
      await newProperty.save();
      res.status(201).json({ message: "Property added successfully", property: newProperty });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error.message });
    }
  };
  

// Get all properties
exports.getAllProperties = async (req, res) => {
  try {
    const properties = await Property.find();
    res.status(200).json(properties);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a property by ID
exports.getPropertyById = async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);
    if (!property) {
      return res.status(404).json({ message: 'Property not found' });
    }
    res.status(200).json(property);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a property by ID
exports.updatePropertyById = async (req, res) => {
    const propertyId = req.params.id;
    const updatedData = req.body;
  
    try {
      const updatedProperty = await Property.findByIdAndUpdate(
        propertyId,
        updatedData,
        { new: true }
      );
  
      if (!updatedProperty) {
        return res.status(404).json({ error: "Property not found" });
      }
  
      res.status(200).json(updatedProperty);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  

// Delete a property by ID
exports.deletePropertyById = async (req, res) => {
  try {
    const property = await Property.findByIdAndDelete(req.params.id);
    if (!property) {
      return res.status(404).json({ message: 'Property not found' });
    }
    res.status(200).json({ message: 'Property deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
