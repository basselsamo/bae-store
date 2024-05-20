"use strict"
const express = require('express');
const bcrypt = require('bcrypt');
const session = require('express-session');
const app = express();
const path = require('path');
const errorController = require('./controllers/errorController');
const httpStatus = require('http-status-codes');
require('./config/database');
const profileRoutes = require('./routes/profileRoutes');

app.set("port", process.env.PORT || 3000);
app.use(express.static(path.join(__dirname, 'public')));
app.set("view engine", "ejs")

// Middlewares for parsing request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Session middleware configuration
app.use(session({
  secret: 'your_secret_key', // This secret key should be a secret!
  resave: false,
  saveUninitialized: true,
  cookie: { secure: 'auto' } // Set to true if using https
}));

app.use('/', profileRoutes);

// Import routes
const userRoutes = require('./routes/userRoutes');

// Use routes
app.use(userRoutes);

// Middleware to serve static files from 'views' directory
app.use(express.static(path.join(__dirname, 'views')));

app.get('/', (req, res) => {
  res.render('index', { title: 'Home Page' });
});

app.get('/register', (req, res) => {
  res.render('register', { title: 'Register' });
});

app.get('/login', (req, res) => {
  res.render('login', { title: 'Login' });
});

// Logout route
app.get('/logout', (req, res) => {
  req.session.destroy(err => {
      if (err) {
          return console.log(err);
      }
      res.redirect('/login'); // Redirect to login page after logout
  });
});


// Error handling middleware
app.use(errorController.pageNotFoundError);
app.use(errorController.internalServerError);

app.listen(app.get("port"), () => {
  console.log(`Server running at http://localhost:${app.get("port")}`);
});
