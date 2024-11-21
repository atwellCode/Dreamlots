const mongoose = require('mongoose');

// Define the schema for comments
const commentSchema = new mongoose.Schema({
  content: {
    type: String,
    required: [true, 'Comment content is required'],
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // References the User model (optional)
    required: true,
  },
  property: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Property', // References the Property model
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
}, { timestamps: true });

// Create a model using the schema
const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
