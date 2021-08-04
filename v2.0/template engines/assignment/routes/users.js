const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const adminData = require('./admin');

router.get('/', (req, res, next) => {
  console.log(adminData.users);

  res.render('users', {
    prods: adminData.users, pageTitle: "Users", path: '/',
    hasusers: adminData.users.length > 0,
    activeShop: true,
    productCSS: true,
    formsCSS: false,
  });

});

module.exports = router;
