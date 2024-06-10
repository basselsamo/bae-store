// models/Product.js
const mongoose = require('mongoose');

const SizesStockSchema = new mongoose.Schema({
  size: { type: String, required: true },
  stock: { type: Number, required: true }
});

const ProductSchema = new mongoose.Schema({
  productTitle: { type: String, required: true },
  productBrand: { type: String, required: true },
  productSKU: { type: String, required: true, unique: true },
  productYear: { type: Number, required: true },
  productMaterials: { type: [String], required: true },
  productDescription: { type: [String], required: true },
  productCategories: { type: [String], required: true },
  productSeasons: { type: [String], required: true },
  productGenders: { type: [String], required: true },
  productColors: { type: [String], required: true },
  productSizesStock: { type: [SizesStockSchema], required: true },
  productPrice: { type: Number, required: true },
  productImages: { type: [String], required: true }
});

module.exports = mongoose.model('Product', ProductSchema);
