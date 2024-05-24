// controllers/userController.js
const User = require('../models/User');
const bcrypt = require('bcrypt');

exports.registerUser = (req, res) => {
  const { firstName, lastName, email, password, confirmPassword } = req.body;
  
  if (password !== confirmPassword) {
    return res.status(400).send('Passwords do not match! <a href="/register">Return to registration form</a>');
  }
  User.findOne({ $or: [{ email: email }] }).exec()
    .then(existingUser => {
      if (existingUser) {
        res.status(409).send('Email already exists. <a href="/register">Return to registration form</a>'); // Updated the error message for clarity
        return Promise.reject('UserExistsError'); // Prevent further execution
      }
      return bcrypt.hash(password, 10); // Continue with password hashing if user does not exist.
    })
    .then(hashedPassword => {
      if (!hashedPassword) {
        return; // Stop if the hashedPassword was not generated.
      }
      const newUser = new User({
        firstName: firstName,
        lastName: lastName,
        email: email, // Include the email in the newUser object
        password: hashedPassword
      });
      return newUser.save(); // Save new user to the database.
    })
    .then(user => {
      if (user) {
        res.status(201).send('User registered successfully. <a href="/login">Login to view profile</a>'); // Send success response.
      }
    })
    .catch(error => {
      if (error !== 'UserExistsError') {
        console.error("Registration error:", error);
        if (!res.headersSent) {
          res.status(500).send("Error registering new user: " + error + '<a href="/register">Return to registration form/a>');
        }
      }
    });
};

exports.loginUser = (req, res) => {
  let foundUser; // Declare variable in a higher scope
  const { email, password } = req.body;
  User.findOne({ email: email }).exec()
    .then(user => {
      if (!user) {
        res.status(401).send('Invalid email or password. <a href="/login">Return to login page</a>');
        return Promise.reject('abort'); // Early exit from the promise chain
      }
      foundUser = user; // Save user to outer scope variable
      return bcrypt.compare(password, user.password);
    })
    .then(isMatch => {
      if (!isMatch) {
        res.status(401).send('Invalid email or password. <a href="/login">Return to login page</a>');
      } else {
        req.session.user = { id: foundUser._id, email: foundUser.email, firstName: foundUser.firstName }; // Use foundUser here
        res.redirect('/profile');
      }
    })
    .catch(error => {
      if (error !== 'abort') {
        res.status(500).send("Login error: " + error + '<a href="/login">Return to login page</a>');
      }
    });
};

exports.getUserDetails = (req, res) => {
  if (!req.session.user) {
    return res.redirect('/login');
  }
  User.findById(req.session.user.id).exec()
    .then(user => res.render('details', { user }))
    .catch(error => res.status(500).send("Error fetching user details: " + error) + '<a href="/profile">Return to profile</a>');
};

exports.updateUserDetails = (req, res) => {
  const { email, firstName, lastName, address, phoneNumber, password } = req.body;
  let updateObject = { email, firstName, lastName, address, phoneNumber };

  if (password) { // Check if password field is not empty
    bcrypt.hash(password, 10, (err, hashedPassword) => {
      if (err) {
        return res.status(500).send('Failed to update password. <a href="/profile/details">Return to profile details</a>');
      }
      updateObject.password = hashedPassword;
      updateProfile(updateObject, req, res);
    });
  } else {
    updateProfile(updateObject, req, res);
  }
};

function updateProfile(updateObject, req, res) {
  User.findByIdAndUpdate(req.session.user.id, { $set: updateObject }, { new: true }).exec()
    .then(() => {
      res.redirect('/profile/details');
    })
    .catch(error => res.status(500).send("Error updating user details: " + error + '<a href="/profile/details">Return to profile details</a>'));
}

exports.deleteUserProfile = (req, res) => {
  if (!req.session.user) {
    return res.redirect('/login');
  }
  const { password } = req.body;
  User.findById(req.session.user.id).exec()
    .then(user => {
      if (!user) {
        res.status(404).send('User not found. <a href="/login">Return to login page</a>');
        return Promise.reject('UserNotFound');
      }
      return bcrypt.compare(password, user.password);
    })
    .then(passwordMatch => {
      if (!passwordMatch) {
        res.status(401).send('Password incorrect and profile was not deleted. <a href="/">Return to homepage</a>');
        return Promise.reject('PasswordIncorrect');
      }
      return User.findByIdAndDelete(req.session.user.id).exec();
    })
    .then(() => {
      req.session.destroy();
      res.send('Profile deleted successfully. <a href="/">Return to homepage</a>');
    })
    .catch(error => {
      if (['UserNotFound', 'PasswordIncorrect'].includes(error)) {
        return; // Errors handled within the flow
      }
      console.error("Deletion error:", error);
      res.status(500).send("Error deleting user profile: " + error + '<a href="/profile">Return to profile</a>');
    });
};

exports.getExclusiveProducts = (req, res) => {
  if (req.session.userId) {
    res.send('Exclusive products here');
  } else {
    res.status(401).send('Please login to view this page. <a href="/login">Navigate to login page</a>');
  }
};
