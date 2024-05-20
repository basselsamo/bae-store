const express = require('express');
const router = express.Router();

router.get('/profile', (req, res) => {
    if (req.session.user) {
        res.render('profile', { username: req.session.user.username });
    } else {
        res.redirect('/login'); // Redirect to login if not authenticated
    }
});

module.exports = router;