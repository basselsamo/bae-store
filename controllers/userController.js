// controllers/userController.js
const bcrypt = require('bcrypt');

exports.registerUser = async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  // Save username and hashedPassword to database
  res.send('User registered successfully');
};

exports.loginUser = async (req, res) => {
  const { username, password } = req.body;
  // Retrieve user from database
  const user = { id: 1, username, passwordHash: 'stored_hashed_password' };
  const match = await bcrypt.compare(password, user.passwordHash);
  if (match) {
    req.session.userId = user.id;
    res.send('Logged in!');
  } else {
    res.status(401).send('Incorrect username or password');
  }
};

exports.getExclusiveProducts = (req, res) => {
  if (req.session.userId) {
    res.send('Exclusive products here');
  } else {
    res.status(401).send('Please login to view this page');
  }
};
