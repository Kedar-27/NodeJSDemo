const express = require('express');
const app = express();
const path = require('path');

const shopRouter = require('./routes/users');
const homeRouter = require('./routes/home');

app.use(express.urlencoded({ extended: false }));



app.use(homeRouter);
app.use(shopRouter);
app.use(express.static(path.join(__dirname,'public')));

app.use((req,res,next)=>{


    res.status(404).sendFile(path.join(__dirname,'views','404.html'));
});



app.listen(3000);