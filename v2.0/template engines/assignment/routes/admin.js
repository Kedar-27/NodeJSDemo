const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const users = [];

// /admin/add-product => GET
router.get('/users', (req, res, next) => {
  res.render('add-user', {pageTitle: "Add User", path: '/users', activeAddProduct: true,
  productCSS: false,
  formsCSS: true,
});
});

// /admin/add-product => POST
router.post('/add-user', (req, res, next) => {
  console.log(req.body);
  users.push({ title : req.body.title});
  res.redirect('/'); 
});

exports.router = router;
exports.users = users;