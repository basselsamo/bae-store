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

module.exports = router;