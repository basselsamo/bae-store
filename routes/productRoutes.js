// routes/productRoutes.js
"use strict"

const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const Product = require('../models/Product');

router.get('/products', productController.getAllProducts);
router.get('/dashboard/manage-products', productController.renderProductManagementPage);
router.get('/dashboard/manage-products/new-product', productController.renderNewProductPage);
router.post('/dashboard/manage-products/new-product', productController.addNewProduct);
router.get('/dashboard/manage-products/edit-product/:id', productController.renderEditProductPage);
router.post('/dashboard/manage-products/edit-product/:id', productController.updateProduct);
router.post('/dashboard/manage-products/delete-product/:id', productController.deleteProduct);
router.get('/dashboard/manage-products/search', async (req, res) => {
    if (req.session.user && req.session.user.email === 'admin@localhost.com') {
        const query = req.query.query;
        const regex = new RegExp(query, 'i');
        const isNumberQuery = !isNaN(query);

        const searchConditions = [
            { productTitle: regex },
            { productBrand: regex },
            { productSKU: regex },
            { productMaterials: regex },
            { productCategories: regex },
            { productColors: regex },
            { productSeasons: regex },
            { productGenders: regex },
            { "productSizesStock.size": regex }
        ];

        if (isNumberQuery) {
            searchConditions.push({ productPrice: Number(query) });
            searchConditions.push({ productYear: Number(query) });
            searchConditions.push({ "productSizesStock.stock": Number(query) });
        }

        try {
            const products = await Product.find({
                $or: searchConditions
            });

            const resultCount = products.length;
            res.render('manage-products', { products: products, resultCount: resultCount, query: query });
        } catch (err) {
            console.error(err);
            res.status(500).send('Server Error');
        }
    } else {
        res.redirect('/products');
    }
});



module.exports = router;
