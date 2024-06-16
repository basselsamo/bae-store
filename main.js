"use strict"

// Basic Setup and Module Imports
const express = require('express');
const app = express();
const mongoose = require("mongoose");
const session = require('express-session');
const flash = require('connect-flash');
const userRoutes = require('./routes/userRoutes');
const accountRoutes = require('./routes/accountRoutes');
const productRoutes = require('./routes/productRoutes');
const errorController = require('./controllers/errorController');

// Database Connection
mongoose.connect("mongodb://localhost:27017/bae_db");
const db = mongoose.connection;
db.once("open", () => {
  console.log("Successfully connected to MongoDB using Mongoose!");
});

// Middleware Configuration
app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs")
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
  secret: 'your_secret_key',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: 'auto' }
}));
app.use(flash());
app.use((req, res, next) => {
  res.locals.successMessage = req.flash('successMessage');
  res.locals.failMessage = req.flash('failMessage');
  next();
});

// Route definitions
app.use('/', accountRoutes);
app.use(userRoutes);
app.use('/', productRoutes);

// Helper function for route guarding (Authentication)
function redirectIfAuthenticated(req, res, next) {
  if (req.session.user) {
    if (req.session.user.email === 'admin@localhost.com') {
      return res.redirect('/dashboard');
    } else {
      return res.redirect('/account');
    }
  }
  next();
}

// Route handlers
app.get('/register', redirectIfAuthenticated, (req, res) => {
  res.render('register', { title: 'Register' });
});
app.get('/login', redirectIfAuthenticated, (req, res) => {
  res.render('login', { title: 'Login' });
});
app.get('/', (req, res) => {
  const isAdmin = req.session.user && req.session.user.email === 'admin@localhost.com';
  res.render('index', { title: 'Home', isAdmin: isAdmin });
});
app.get('/logout', (req, res) => {
  req.session.destroy(err => {
      if (err) {
          console.log(err);
          res.redirect("Error logging out");
      } else {
          res.redirect('/');
      }
  });
});

// Error handling middleware
app.use(errorController.pageNotFoundError);
app.use(errorController.internalServerError);

// Starting server on port 3000
app.listen(app.get("port"), () => {
  console.log(`Server running at http://localhost:${app.get("port")}`);
});
