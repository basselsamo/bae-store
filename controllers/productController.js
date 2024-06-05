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
    req.flash('failMessage', 'Only Members Allowed! Login or Register Now.');
    res.redirect('/login');
  }
};