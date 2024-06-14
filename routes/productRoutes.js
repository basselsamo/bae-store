// routes/productRoutes.js
"use strict"

const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/products', productController.getAllProducts);

router.get('/products/new-product', productController.renderNewProductPage);
router.post('/products/new-product', productController.addNewProduct);

module.exports = router;
