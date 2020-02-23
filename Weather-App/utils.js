var request = require('request');

const darkSkyApiKey = "b2fedb024203ddc64561fc1c7a697b24"
const darkSkyBaseURL = "https://api.darksky.net/forecast/"
const mapBoxApiKey = "pk.eyJ1IjoidGVtcG1haWwxMjMiLCJhIjoiY2s2YjNxNDRpMGJrYzNtcDlvdXdmajIzZyJ9.t85JF8kZzNbo7H_u6bJwRQ"
const mapBoxBaseURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/"


const forecast = (latitude, longitude, callback) => {
    // url
    const darkSkyURL = darkSkyBaseURL + darkSkyApiKey + `/${latitude},${longitude}`
    request({
        url: darkSkyURL
    }, (error, {body}) => {
        if (error) {
            callback("Unable to get weather", undefined)
        } else {
            const data = JSON.parse(body)
            //console.log(data.currently)
            console.log(data.daily.data[0].summary + ' It is currently ' + data.currently.temperature + ' degress out. There is a ' + data.currently.precipProbability + '% chance of rain.')
            callback(undefined, data)
        }

    })
}
const geocode = (address, callback) => {

    const url = mapBoxBaseURL + encodeURIComponent(address) + ".json?access_token=" + mapBoxApiKey + '&limit=1' 

        request({
            url,
            json: true
        }, (error, {body}) => {
            if (error) {
                callback('Unable to connect to location services!', undefined)
            } else if (body.features.length === 0) {
                callback('Unable to find location. Try another search.', undefined)
            } else {
                const latitude = body.features[0].center[0]
                const longitude = body.features[0].center[1]
                console.log(latitude, longitude)
                callback(undefined, {
                    latitude: latitude,
                    longitude: longitude,
                    place_name: body.features[0].place_name
                })
            }
        })
}


module.exports = {
    geocode,
    forecast
}