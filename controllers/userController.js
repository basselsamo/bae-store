// controllers/userController.js
const User = require('../models/User');
const bcrypt = require('bcrypt');

exports.registerUser = async (req, res) => {
  try{

  const { username, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  // Save username and hashedPassword to database
  const newUser = new User({
  username : username,
  email: email,
  password: hashedPassword
  });

  await newUser.save();
  res.status(201).send("User registered successfully");
  } catch (error) {
        res.status(500).send("Error registering new user: " + error);
  }
};

exports.loginUser = async (req, res) => {
  
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username: username });

    if (user && await bcrypt.compare(password, user.password)) {
        res.status(200).send("User logged in successfully");
    } else {
        res.status(401).send("Invalid username or password");
    }
} catch (error) {
    res.status(500).send("Login error: " + error);
}
};

exports.getExclusiveProducts = (req, res) => {
  if (req.session.userId) {
    res.send('Exclusive products here');
  } else {
    res.status(401).send('Please login to view this page');
  }
};
