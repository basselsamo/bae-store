// controllers/userController.js
const User = require('../models/User');
const bcrypt = require('bcrypt');

exports.registerUser = (req, res) => {
  const { username, password } = req.body;
  User.findOne({ username: username }).exec()
    .then(existingUser => {
      if (existingUser) {
        res.status(409).send("Username already exists"); // Send response and stop further execution.
        return Promise.reject('UserExistsError'); // Reject promise with a custom error to prevent further then blocks from executing.
      }
      return bcrypt.hash(password, 10); // Continue with password hashing if user does not exist.
    })
    .then(hashedPassword => {
      if (!hashedPassword) {
        return; // Stop if the hashedPassword was not generated.
      }
      const newUser = new User({
        username: username,
        password: hashedPassword
      });
      return newUser.save(); // Save new user to the database.
    })
    .then(user => {
      if (user) {
        res.status(201).send("User registered successfully"); // Send success response.
      }
    })
    .catch(error => {
      if (error !== 'UserExistsError') {
        console.error("Registration error:", error);
        if (!res.headersSent) {
          res.status(500).send("Error registering new user: " + error);
        }
      }
    });
};

exports.loginUser = (req, res) => {
  let foundUser; // Declare variable in a higher scope
  const { username, password } = req.body;
  User.findOne({ username: username }).exec()
    .then(user => {
      if (!user) {
        res.status(401).send("Invalid username or password");
        return Promise.reject('abort'); // Early exit from the promise chain
      }
      foundUser = user; // Save user to outer scope variable
      return bcrypt.compare(password, user.password);
    })
    .then(isMatch => {
      if (!isMatch) {
        res.status(401).send("Invalid username or password");
      } else {
        req.session.user = { id: foundUser._id, username: foundUser.username }; // Use foundUser here
        res.redirect('/profile');
      }
    })
    .catch(error => {
      if (error !== 'abort') {
        res.status(500).send("Login error: " + error);
      }
    });
};

exports.getExclusiveProducts = (req, res) => {
  if (req.session.userId) {
    res.send('Exclusive products here');
  } else {
    res.status(401).send('Please login to view this page');
  }
};
