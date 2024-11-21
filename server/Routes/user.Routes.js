const express = require('express');
const { addUser, getUsers, getUserById, updateUser, deleteUser } = require('../Controllers/user.Controller');

const router = express.Router();

// Add a new user
router.post('/addUser', addUser);

// login users
router.post('/loginUser', getUsers);
// Get all user
router.get('/getUser', getUsers);

// Get a user by ID
router.get('/getUserById/:id', getUserById);

// Update a user by ID
router.put('/updateUser/:id', updateUser);

// Delete a user by ID
router.delete('/deleteUser/:id', deleteUser);

module.exports = router;
