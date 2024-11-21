const express = require('express');
const {
  postComment,
  getComments,
  getCommentById,
  updateComment,
  deleteComment,
} = require('../Controllers/comment.controller');

const router = express.Router();

// POST: Add a new comment
router.post('/addComment', postComment);

// GET: Fetch all comments
router.get('/getComment', getComments);

// GET: Fetch a single comment by ID
router.get('/getCommentById/:id', getCommentById);

// PUT: Update a comment by ID
router.put('/updateComment/:id', updateComment);

// DELETE: Delete a comment by ID
router.delete('/deleteComment/:id', deleteComment);

module.exports = router;
