const express = require('express');
const app = express();


app.use('/users',(req,res,next)=>{
    console.log('Inside Middleware');

    res.send('<h1>hello users</h1>');
    next();
});


app.use('/',(req,res,next)=>{
    console.log('Inside Middleware');

    res.send('<h1>hello</h1>');
    next();
});



app.listen(3000);



