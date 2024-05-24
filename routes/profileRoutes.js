const express = require('express');
const router = express.Router();

router.get('/profile', (req, res) => {
    if (req.session.user) {
        res.render('profile', { email: req.session.user.email,  firstName: req.session.user.firstName });
    } else {
        res.redirect('/login'); // Redirect to login if not authenticated
    }
});

module.exports = router;