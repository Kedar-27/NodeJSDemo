const express = require('express');
const rootDir = require('../utils/path');
const router = express.Router();
const path = require('path');

router.get('/', (req, res, next) => {
    //console.log('Inside Middleware');
    
    res.sendFile(path.join(rootDir,'views','shop.html'));
});




module.exports = router;