"use strict"

const Product = require('../models/Product');

exports.getAllProducts = (req, res) => {
  if (req.session.user) {
    Product.find().exec()
      .then(products => {
        res.render('products', { products });
      })
      .catch(error => {
        console.error("Error fetching products:", error);
        res.status(500).send("Error fetching products: " + error);
      });
  } else {
    req.flash('failMessage', 'Only Members Allowed! Login Or Register Now.');
    res.redirect('/login');
  }
};

exports.renderProductManagementPage = (req, res) => {
  if (req.session.user && req.session.user.email === 'admin@localhost.com') {
      Product.find().exec()
          .then(products => {
              res.render('manage-products', { products });
          })
          .catch(error => {
              console.error("Error fetching products:", error);
              res.status(500).send("Error fetching products: " + error);
          });
  } else {
      res.redirect('/products');
  }
};

exports.renderNewProductPage = (req, res) => {
  if (req.session.user && req.session.user.email === 'admin@localhost.com') {
    res.render('new-product');
  } else {
    res.redirect('/products');
  }
};

exports.addNewProduct = (req, res) => {
  const {
    productTitle,
    productBrand,
    productSKU,
    productYear,
    productMaterials,
    productDescription,
    productCategories,
    productSeasons,
    productGenders,
    productColors,
    productSizesStock,
    productPrice,
    productImages
  } = req.body;

  // Transform productSizesStock into the correct format
  const sizesStock = productSizesStock.size.map((size, index) => ({
    size: size,
    stock: productSizesStock.stock[index]
  }));

  // Create the new product object
  const newProduct = new Product({
    productTitle,
    productBrand,
    productSKU,
    productYear,
    productMaterials: Array.isArray(productMaterials) ? productMaterials : [productMaterials],
    productDescription: Array.isArray(productDescription) ? productDescription : [productDescription],
    productCategories: Array.isArray(productCategories) ? productCategories : [productCategories],
    productSeasons: Array.isArray(productSeasons) ? productSeasons : [productSeasons],
    productGenders: Array.isArray(productGenders) ? productGenders : [productGenders],
    productColors: Array.isArray(productColors) ? productColors : [productColors],
    productSizesStock: sizesStock,
    productPrice: parseFloat(productPrice),
    productImages: Array.isArray(productImages) ? productImages : [productImages]
  });

  newProduct.save()
    .then(() => {
      req.flash('successMessage', 'Product Added Successfully');
      res.redirect('/dashboard');
    })
    .catch(error => {
      console.error("Error adding product:", error);
      req.flash('failMessage', 'Error Adding Product');
      res.redirect('/dashboard/manage-products/new-product');
    });
};

exports.renderEditProductPage = (req, res) => {
  if (req.session.user && req.session.user.email === 'admin@localhost.com') {
    const productId = req.params.id;
    Product.findById(productId).exec()
    .then(product => {
      if (!product) {
        req.flash('failMessage', 'Product not found');
        return res.redirect('/dashboard/manage-products');
      }
      res.render('edit-product', { product });
    })
    .catch(error => {
      console.error("Error fetching product:", error);
      req.flash('failMessage', 'Error fetching product');
      res.redirect('/dashboard/manage-products');
    });
  } else {
    res.redirect('/products');
  }
};


exports.updateProduct = (req, res) => {
  const productId = req.params.id;
  const {
    productTitle,
    productBrand,
    productSKU,
    productYear,
    productMaterials,
    productDescription,
    productCategories,
    productSeasons,
    productGenders,
    productColors,
    productSizesStock,
    productPrice,
    productImages
  } = req.body;

  // Transform productSizesStock into the correct format
  const sizesStock = productSizesStock.size.map((size, index) => ({
    size: size,
    stock: productSizesStock.stock[index]
  }));

  const updatedData = {
    productTitle,
    productBrand,
    productSKU,
    productYear,
    productMaterials: Array.isArray(productMaterials) ? productMaterials : [productMaterials],
    productDescription: Array.isArray(productDescription) ? productDescription : [productDescription],
    productCategories: Array.isArray(productCategories) ? productCategories : [productCategories],
    productSeasons: Array.isArray(productSeasons) ? productSeasons : [productSeasons],
    productGenders: Array.isArray(productGenders) ? productGenders : [productGenders],
    productColors: Array.isArray(productColors) ? productColors : [productColors],
    productSizesStock: sizesStock,
    productPrice: parseFloat(productPrice),
    productImages: Array.isArray(productImages) ? productImages : [productImages]
  };

  Product.findByIdAndUpdate(productId, updatedData, { new: true }).exec()
    .then(() => {
      req.flash('successMessage', 'Product updated successfully');
      res.redirect('/dashboard/manage-products');
    })
    .catch(error => {
      console.error("Error updating product:", error);
      req.flash('failMessage', 'Error updating product');
      res.redirect('/dashboard/manage-products');
    });
};

exports.deleteProduct = (req, res) => {
  const productId = req.params.id;

  Product.findByIdAndDelete(productId).exec()
    .then(() => {
      req.flash('successMessage', 'Product deleted successfully');
      res.redirect('/dashboard/manage-products');
    })
    .catch(error => {
      console.error("Error deleting product:", error);
      req.flash('failMessage', 'Error deleting product');
      res.redirect('/dashboard/manage-products');
    });
};