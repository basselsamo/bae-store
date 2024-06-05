const mongoose = require("mongoose");
const User = require("./models/User");
const bcrypt = require("bcrypt");
const Product = require("./models/Product");

mongoose.connect("mongodb://localhost:27017/bae_db");
mongoose.connection;

var users = [
  {
    email: "admin@localhost.com",
    password: "123",
    firstName: "Admin",
    lastName: "User"
  },
  {
    email: "customer@localhost.com",
    password: "123",
    firstName: "Customer",
    lastName: "User"
  }
]

var products = [
  {
    productTitle: "Nike Air Max 90",
    productBrand: "Nike",
    productSKU: "FB9657-200",
    productYear: 2024,
    productMaterials:["Leather"],
    productDescription: "A tangible legacy. Born at the intersection of art, music and culture, this champion running shoe defined the '90s. Worn by presidents, revolutionized in collabs and celebrated in rare colorways, its bold look, waffle sole and visible Nike Air cushioning ensure it remains as relevant as ever.",
    productCategories: ["Sneakers", "Shoes"],
    productSeasons: ["Spring", "Winter"],
    productGenders: ["Women", "Men"],
    productColors: ["Olive", "Black", "White"],
    productSizes: ["40", "41", "42", "43", "44", "45", "46", "47", "48"],
    productPrice: 139,
    productImages: ["https://img001.prntscr.com/file/img001/Gy6p9-CFQeiJlC_o0Nst-g.png"],
    productAvailability: true,
    productStock: 10
  },
  {
    productTitle: "Nike Air Max 90",
    productBrand: "Nike",
    productSKU: "FB9658-400",
    productYear: 2024,
    productMaterials:["Leather"],
    productDescription: "Tie the laces and feel the legacy of this champion running shoe that defined the '90s. Worn by presidents, revolutionized in collaborations and celebrated through rare colorways, the waffle outsole, visible Nike Air cushioning and bold visuals keep it alive.",
    productCategories: ["Sneakers", "Shoes"],
    productSeasons: ["Summer", "Winter"],
    productGenders: ["Men", "Women"],
    productColors: ["Black", "White", "Navy"],
    productSizes: ["40", "41", "42", "43", "44", "45", "46", "47", "48"],
    productPrice: 159,
    productImages: ["https://img001.prntscr.com/file/img001/jvx2wYFbQFKi_gZSBLQ1VA.png"],
    productAvailability: false,
    productStock: 0
  }
]

const createUsers = async () => {
  for (const user of users) {
    const existingUser = await User.findOne({ email: user.email }).exec();
    if (!existingUser) {
      const hashedPassword = await bcrypt.hash(user.password, 10);
      user.password = hashedPassword;
      await User.create(user);
      console.log(`Demo user ${user.email} created successfully.`);
    } else {
      console.log(`Demo user ${user.email} already exists.`);
    }
  }
};

const createProducts = async () => {
  for (const product of products) {
    const existingProduct = await Product.findOne({ productSKU: product.productSKU }).exec();
    if (!existingProduct) {
      await Product.create(product);
      console.log(`Demo product ${product.productSKU} created successfully.`);
    } else {
      console.log(`Demo product ${product.productSKU} already exists.`);
    }
  }
};

const seedDatabase = async () => {
  try {
    await createUsers();
    await createProducts();
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    mongoose.connection.close();
  }
};

seedDatabase();
