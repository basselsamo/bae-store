"use strict"

const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
    if (req.session.user) {
        res.locals.firstName = req.session.user.firstName;
    } else {
        res.locals.firstName = "Account"; // Or some default value if the user is not logged in
    }
    next();
});

router.get('/account', (req, res) => {
    if (req.session.user && req.session.user.email != 'admin@localhost.com') {
        res.render('account', { email: req.session.user.email});
    } else {
        res.redirect('/login');
    }
});

router.get('/dashboard', (req, res) => {
    if (req.session.user && req.session.user.email === 'admin@localhost.com') {
        res.render('dashboard', { email: req.session.user.email});
    } else {
        res.redirect('/login');
    }
});

module.exports = router;