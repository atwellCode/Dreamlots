const Comment = require('../Models/comment.Model');
const Property = require('../Models/property.Model');
const User = require('../Models/user.Model');

// POST: Add a new comment
const postComment = async (req, res) => {
  try {
    const { content, userId, propertyId } = req.body;

    // Validate user and property existence
    const user = await User.findById(userId);
    const property = await Property.findById(propertyId);

    if (!user) return res.status(404).json({ error: 'User not found' });
    if (!property) return res.status(404).json({ error: 'Property not found' });

    // Create and save the comment
    const comment = new Comment({
      content,
      user: userId,
      property: propertyId,
    });
    const savedComment = await comment.save();

    res.status(201).json({
      message: 'Comment added successfully',
      comment: savedComment,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET: Fetch all comments
const getComments = async (req, res) => {
  try {
    const comments = await Comment.find()
      .populate('user', 'name email') // Populate user details
      .populate('property', 'propertyName'); // Populate property details

    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET: Fetch a single comment by ID
const getCommentById = async (req, res) => {
  try {
    const { id } = req.params;
    const comment = await Comment.findById(id)
      .populate('user', 'name email') // Populate user details
      .populate('property', 'propertyName'); // Populate property details

    if (!comment) return res.status(404).json({ error: 'Comment not found' });

    res.status(200).json(comment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// PUT: Update a comment
const updateComment = async (req, res) => {
  try {
    const { id } = req.params;
    const { content } = req.body;

    // Find and update the comment
    const updatedComment = await Comment.findByIdAndUpdate(
      id,
      { content },
      { new: true } // Return the updated document
    );

    if (!updatedComment)
      return res.status(404).json({ error: 'Comment not found' });

    res.status(200).json({
      message: 'Comment updated successfully',
      comment: updatedComment,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// DELETE: Delete a comment
const deleteComment = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedComment = await Comment.findByIdAndDelete(id);

    if (!deletedComment)
      return res.status(404).json({ error: 'Comment not found' });

    res.status(200).json({
      message: 'Comment deleted successfully',
      comment: deletedComment,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  postComment,
  getComments,
  getCommentById,
  updateComment,
  deleteComment,
};
