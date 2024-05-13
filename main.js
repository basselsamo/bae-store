"use strict"
const express = require('express');
const bcrypt = require('bcrypt');
const session = require('express-session');
const app = express();
const port = 3000;
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

// Middlewares for parsing request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Session middleware configuration
app.use(session({
  secret: 'your_secret_key',
  resave: false,
  saveUninitialized: true
}));

// Import routes
const userRoutes = require('./routes/userRoutes');

// Use routes
app.use(userRoutes);

// Middleware to serve static files from 'views' directory
app.use(express.static(path.join(__dirname, 'views')));

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'register.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'login.html'));
});

app.listen(port, () => {
  console.log(`BAE-Store app listening at http://localhost:${port}`);
});
