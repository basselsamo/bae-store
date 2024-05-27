// controllers/userController.js
const User = require('../models/User');
const bcrypt = require('bcrypt');

exports.registerUser = (req, res) => {
  const { firstName, lastName, email, password, confirmPassword } = req.body;
  
  if (password !== confirmPassword) {
    req.flash('failMessage', 'Passwords Do Not Match!');
    res.redirect('/register');
    return;
  }
  User.findOne({ $or: [{ email: email }] }).exec()
    .then(existingUser => {
      if (existingUser) {
        req.flash('failMessage', 'Email Already Registered! Use Different Email.');
        res.redirect('/register');
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
        req.session.user = { id: user._id, email: user.email, firstName: user.firstName };
        res.redirect('/profile');
      }
    })
    .catch(error => {
      if (error !== 'UserExistsError') {
        console.error("Registration error:", error);
        if (!res.headersSent) {
          req.flash('failMessage', 'Unknown Error Occurred! Try Again Later.');
          res.redirect('/register');
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
        req.flash('failMessage', 'Invalid Email! Check Typos.');
        res.redirect('/login');
        return Promise.reject('abort'); // Early exit from the promise chain
      }
      foundUser = user; // Save user to outer scope variable
      return bcrypt.compare(password, user.password);
    })
    .then(isMatch => {
      if (!isMatch) {
        req.flash('failMessage', 'Password Incorrect! Re-Enter Password.');
        res.redirect('/login');
      } else {
        req.session.user = { id: foundUser._id, email: foundUser.email, firstName: foundUser.firstName }; // Use foundUser here
        res.redirect('/profile');
      }
    })
    .catch(error => {
      if (error !== 'abort') {
        req.flash('failMessage', 'Unknown Error Occurred! Try Again Later.');
        res.redirect('/login');
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
        req.flash('failMessage', 'Failed to update password!');
        res.redirect('/profile/details');
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
      req.flash('successMessage', 'Profile Details Updated Successfully!');
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
        req.flash('failMessage', 'User Not Found!');
      res.redirect('/login');
        return Promise.reject('UserNotFound');
      }
      return bcrypt.compare(password, user.password);
    })
    .then(passwordMatch => {
      if (!passwordMatch) {
        req.flash('failMessage', 'Password Incorrect! Re-Enter Password.');
        res.redirect('/profile/details');
        return Promise.reject('PasswordIncorrect');
      }
      return User.findByIdAndDelete(req.session.user.id).exec();
    })
    .then(() => {
      req.session.destroy();
      res.redirect('/profile');
    })
    .catch(error => {
      if (['UserNotFound', 'PasswordIncorrect'].includes(error)) {
        return; // Errors handled within the flow
      }
      console.error("Deletion error:", error);
      req.flash('failMessage', 'Unknown Error Occurred! Try Again Later.');
      res.redirect('/profile/details');
    });
};

exports.getExclusiveProducts = (req, res) => {
  if (req.session.userId) {
    res.send('Exclusive products here');
  } else {
    req.flash('failMessage', 'Login To View This Page.');
    res.redirect('/login');
  }
};
