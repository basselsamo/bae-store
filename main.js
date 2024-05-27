"use strict"
const express = require('express');
const bcrypt = require('bcrypt');
const flash = require('connect-flash');
const session = require('express-session');
const app = express();
const path = require('path');
const errorController = require('./controllers/errorController');
const httpStatus = require('http-status-codes');
const db = require('./config/database');
const userRoutes = require('./routes/userRoutes');
const profileRoutes = require('./routes/profileRoutes');

app.set("port", process.env.PORT || 3000);
//app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('public'));
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
app.use(flash());

app.use((req, res, next) => {
  res.locals.successMessage = req.flash('successMessage');
  next();
});

app.use((req, res, next) => {
  res.locals.failMessage = req.flash('failMessage');
  next();
});

app.use('/', profileRoutes);

// Use routes
app.use(userRoutes);

// Middleware to serve static files from 'views' directory
//app.use(express.static(path.join(__dirname, 'views')));

function redirectIfAuthenticated(req, res, next) {
  if (req.session.user) {
    if (req.session.user.email === 'admin@localhost.com') {
      return res.redirect('/dashboard'); // Redirect to the dashboard page if the admin is logged in
    } else {
      return res.redirect('/profile');  // Redirect to the profile page if the user is logged in
    }
  }
  next();  // Continue to the next middleware or route handler if not logged in
}

app.get('/', (req, res) => {
  const isAdmin = req.session.user && req.session.user.email === 'admin@localhost.com';
  res.render('index', { title: 'HomePage', isAdmin: isAdmin });
});

app.get('/register', redirectIfAuthenticated, (req, res) => {
  res.render('register', { title: 'Register' });
});

app.get('/login', redirectIfAuthenticated, (req, res) => {
  res.render('login', { title: 'Login' });
});

// Logout route
app.get('/logout', (req, res) => {
  req.session.destroy(err => {
      if (err) {
          console.log(err);
          res.send("Error logging out");
      } else {
          res.redirect('/login'); // Redirect to login page after logout
      }
  });
});

// Error handling middleware
app.use(errorController.pageNotFoundError);
app.use(errorController.internalServerError);

// After all routes
app.use((err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }
  console.error(err);
  res.status(500).send('Internal Server Error');
});


app.listen(app.get("port"), () => {
  console.log(`Server running at http://localhost:${app.get("port")}`);
});
