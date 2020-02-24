const path = require('path')
const express = require('express')

let app = express()


app.set('view engine', 'hbs');


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


const publicDirectoryPath = path.join(__dirname,'../public')


app.use(express.static(publicDirectoryPath))
//app.use(express.static('/help',publicDirectoryPath))


app.get('/weather', (request, response) => {

    response.send({location: 'India', forecast: '50 degress'})
})


app.listen(3000, () => {
    console.log('Server is running at 3000 port')
})