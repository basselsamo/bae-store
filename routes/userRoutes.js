"use strict"

// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const userController = require('../controllers/userController');

// User registration
router.post('/register', userController.registerUser);

// User login
router.post('/login', userController.loginUser);

// Access to exclusive products
router.get('/exclusive-products', userController.getExclusiveProducts);

// Fetch User Profile Settings
router.get('/profile/details', userController.getUserDetails);

// Update User Profile Settings
router.post('/profile/details', userController.updateUserDetails);

// Delete User Profile
router.post('/profile/delete', userController.deleteUserProfile);

module.exports = router;