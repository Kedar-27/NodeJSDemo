const express = require('express')

let app = express()


app.get('', (request, response) => {

    response.send('Hello, Express')


})

app.get('/help', (request, response) => {

    response.send('Happy to help')
})


app.get('/about', (request, response) => {

    response.send('About')
})

app.get('/weather', (request, response) => {

    response.send('Weather is loading')
})


app.listen(3000, () => {
    console.log('Server is running at 3000 port')
})