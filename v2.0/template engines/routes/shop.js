const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const adminData = require('./admin');

router.get('/', (req, res, next) => {
  console.log(adminData.products);

  res.render('shop', {
    prods: adminData.products, pageTitle: "Shop", path: '/', hasProducts: adminData.products.length > 0,
    activeShop: true,
    productCSS: true,
    formsCSS: false,
  });

  //res.sendFile(path.join(rootDir, 'views', 'shop.html'));


});

module.exports = router;
