const path = require('path')
const express = require('express')
const hbs = require('hbs')


let app = express()

// Removed static route handler

// app.get('', (request, response) => {

//     response.send('<h1>Hello Express</>')


// })

// app.get('/help', (request, response) => {

//     response.send([{name: 'Ked27', age: 30}])
// })


// app.get('/about', (request, response) => {

//     response.send('<h2>About </>')
// })


const publicDirectoryPath = path.join(__dirname, '../public')
const viewsDirectoryPath = path.join(__dirname, '../templates/views')
const partialsDirectoryPath = path.join(__dirname, '../templates/partials')
app.set('view engine', 'hbs');

//Setup Static directory to serve
app.use(express.static(publicDirectoryPath))
// Setup views directory for handlebars
app.set('views', viewsDirectoryPath);

hbs.registerPartials(partialsDirectoryPath)


//app.use(express.static(publicDirectoryPath))
//app.use(express.static('/help',publicDirectoryPath))


app.get('', (request, response) => {

    response.render('index', {
        title: 'Weather App',
        name: 'Ked27'
    })


})

app.get('/help', (request, response) => {

    response.render('help', {
        title: 'Happy to help',
        message: 'Feel free to reach.',
         name: 'Ked27'
    })

})


app.get('/about', (request, response) => {

    response.render('about', {
        title: 'Weather App',
        name: 'Ked27'
    })

})



app.get('/weather', (request, response) => {

    response.send({
        location: 'India',
        forecast: '50 degress'
    })
})


app.listen(3000, () => {
    console.log('Server is running at 3000 port')
})