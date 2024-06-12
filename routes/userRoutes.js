"use strict"

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// User registration
router.post('/register', userController.registerUser);

// User login
router.post('/login', userController.loginUser);

// Fetch User Account Details
router.get('/account/details', userController.getUserDetails);

// Update User Account Details
router.post('/account/details', userController.updateUserDetails);

// Delete User Account
router.post('/account/delete', userController.deleteUserAccount);

// Access to exclusive products
// router.get('/products', userController.getExclusiveProducts);

module.exports = router;