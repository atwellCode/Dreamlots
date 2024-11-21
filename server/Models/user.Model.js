const mongoose = require('mongoose');

// Define the User schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
  },
  lastName: {
    type: String,
    required: [true, 'Last name is required'],
  },
  username: {
    type: String,
    required: [true, 'Username is required'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required'],
  },
  cnicNumber: {
    type: String,
    required: [true, 'CNIC number is required'],
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
  },
  confirmPassword: {
    type: String,
    required: [true, 'Confirm Password is required'],
    validate: {
      validator: function (value) {
        return value === this.password;
      },
      message: 'Passwords do not match',
    },
  },
  profileImage: { type: String },
  cnicFrontImage: { type: String },
  cnicBackImage: { type: String },
  properties: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Property' }], // Reference to Property model
}, { timestamps: true });

// Middleware to delete the confirmPassword field before saving to the database
userSchema.pre('save', function (next) {
  this.confirmPassword = undefined;
  next();
});

// Create the User model
const User = mongoose.model('User', userSchema);

module.exports = User;
