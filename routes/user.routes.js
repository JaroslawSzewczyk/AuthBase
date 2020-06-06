const express = require('express');
const router = express.Router();

const userLogIn = (req, res, next) => {
  if (!req.user) {
    res.render('noPermission');
  } else {
    next();
  }
}

router.get('/logged', userLogIn, (req, res) => {
  res.render('logged', { name: req.user.displayName, address: req.user.photos[0].value });
});

router.get('/profile', userLogIn,(req, res) => {
    res.render('profile');
});

router.get('/settings', userLogIn,(req, res) => {
    res.render('settings');
})

router.get('/no-permission', (req, res) => {
  res.render('noPermission');
});


module.exports = router;