const path = require('path');

const express = require('express');
const expressHbs = require('express-handlebars');

const app = express();

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

//app.engine('hbs',expressHbs({layoutsDir : 'views/layouts' , defaultLayout: 'main-layout', extname: 'hbs'}));
app.set('view engine', 'ejs');

app.set('views' , 'views');

app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.router);
app.use(shopRoutes);

app.use((req, res, next) => {

    res.status(404).render('404', {prods: adminData.products ,  pageTitle: "404"});
});

app.listen(3000);
