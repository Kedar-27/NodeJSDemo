const path = require('path')
const express = require('express')
const hbs = require('hbs')
const utils = require('./utils.js')

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

// Define path for express server
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

    const address = request.query.address

    if (!address){
        return response.send({
            error: "Please provide address"
        })
    }

    utils.geocode(address, (error, {
        latitude,
        longitude, place_name
    } = {}) => {
        if (error) {
            return response.send({
                error: error
            })
        }
       
        utils.forecast(latitude, longitude, (error, forcastData) => {
            if (error){
                 return response.send({
                     error: error
                 })
            }

            response.send({
                location: place_name,
                forecast: forcastData,
                address: address
            })


            
        })
    })
    






    // response.send({
    //     location: 'India',
    //     forecast: '50 degress',
    //     address: request.query.address
    // })
})

app.get('/help/*', (request, response) => {

    response.render('error', {
       title: 'Help page not found.',
        name: 'Ked27'
    })
})



app.get('*', (request, response) => {

    response.render('error', {
        title: 'Error 404 Page Not found.',
        name: 'Ked27'
    })
})





app.listen(3000, () => {
    console.log('Server is running at 3000 port')
})