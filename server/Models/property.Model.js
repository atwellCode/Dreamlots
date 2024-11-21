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
  kitchens: { type: Number, required: true }, // New field for the number of kitchens
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

  // Image uploads
  propertyImages: [{ type: String, required: true }], // New field for property images
  garageImage: [{ type: String }], // Array of strings for garage images
  virtualTourImage: [{ type: String }],

  // Reference to the user who owns the property
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
}, { timestamps: true });

// Create a model using the schema
const Property = mongoose.model('Property', propertySchema);

module.exports = Property;
