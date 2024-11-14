const mongoose = require('mongoose');

// Define the schema for the property
const propertySchema = new mongoose.Schema({
  propertyName: { type: String, required: true },
  propertyType: { type: String, required: true },
  propertyLocation: { type: String, required: true },
  city: { type: String, required: true },
  street: { type: String, required: true },
  address: { type: String, required: true },
  price: { type: Number, required: true },
  areaSize: { type: String, required: true },
  bedrooms: { type: Number, required: true },
  bathrooms: { type: Number, required: true },
  floors: { type: Number, required: true },
  description: { type: String },

  // Amenities schema
  amenities: {
    swimmingPool: { type: Boolean, default: false },
    gym: { type: Boolean, default: false },
    security: { type: Boolean, default: false },
    parking: { type: Boolean, default: false },
    electricity: { type: Boolean, default: false },
    gas: { type: Boolean, default: false },
    waterSupply: { type: Boolean, default: false },
  },

//   Image uploads
garageImage: [{ type: String }], // Change this to an array of strings
virtualTourImage: [{ type: String }],
}, { timestamps: true }); 

// Create a model using the schema
const Property = mongoose.model('Property', propertySchema);

module.exports = Property;
