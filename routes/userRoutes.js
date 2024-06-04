"use strict"

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// User registration
router.post('/register', userController.registerUser);

// User login
router.post('/login', userController.loginUser);

// Fetch User Profile Settings
router.get('/profile/details', userController.getUserDetails);

// Update User Profile Settings
router.post('/profile/details', userController.updateUserDetails);

// Delete User Profile
router.post('/profile/delete', userController.deleteUserProfile);

// Access to exclusive products
// router.get('/products', userController.getExclusiveProducts);

module.exports = router;