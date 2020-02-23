
const utils = require('./utils.js')




// // Make network request
// request({url: darkSkyURL}, (error, response) => {
//     if (error){
        
//     }else{
//             const data = JSON.parse(response.body)
//             //console.log(data.currently)
//             console.log(data.daily.data[0].summary + ' It is currently ' + data.currently.temperature + ' degress out. There is a ' + data.currently.precipProbability + '% chance of rain.')

//     }
 
// })


// Geocoding
// Address -> Lat/Long -> Weather

// const geocodeURL = mapBoxBaseURL + mapBoxApiKey + '&limit=1'
// request({ url: geocodeURL, json: true}, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to location services!')
//     } else if (response.body.features.length === 0) {
//         console.log('Unable to find location. Try another search.')
//     } else {
//         const latitude = response.body.features[0].center[0]
//         const longitude = response.body.features[0].center[1]
//         console.log(latitude, longitude)

    
//     }
// })


let address = process.argv[2]


utils.geocode(address, (error, {
            latitude,
            longitude
        }) => {
    if (error){
    return console.log(error)
    }
  //  console.log(data)
    utils.forecast(latitude, longitude, (error,forcastData) =>{
       // console.log(data)
        //console.log(forcastData)
    })
})