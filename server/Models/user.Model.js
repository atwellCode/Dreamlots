const mongoose = require('mongoose');

// Define the User schem
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
    // unique: true,
    // trim: true,
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    // unique: true,
    // trim: true,
    // match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address'],
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required'],
    // unique: true,
    // match: [/^[0-9]{10,13}$/, 'Please use a valid phone number'],
  },
  cnicNumber: {
    type: String,
    required: [true, 'CNIC number is required'],
    // unique: true,
    // match: [/^[0-9]{13}$/, 'Please provide a valid CNIC number'],
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
  // profileImage: {
  //   type: String,
  //   default: null,
  // },
  // cnicFrontImage: {
  //   type: String,
  //   default: null,
  // },
  // cnicBackImage: {
  //   type: String,
  //   default: null,
  // },
}, { timestamps: true });

// Middleware to delete the confirmPassword field before saving to the database
userSchema.pre('save', function (next) {
  this.confirmPassword = undefined;
  next();
});

// Create the User model
const User = mongoose.model('User', userSchema);

module.exports = User;
