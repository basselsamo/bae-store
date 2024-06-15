// routes/productRoutes.js
"use strict"

const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/products', productController.getAllProducts);

router.get('/dashboard/manage-products/new-product', productController.renderNewProductPage);
router.get('/dashboard/manage-products/', productController.renderProductManagementPage);
router.post('/dashboard/manage-products/new-product', productController.addNewProduct);

module.exports = router;
