const fs = require('fs')

const book = {
    title: 'Hello',
    author : 'Ked27'
}

// Create JSON from object
const jsonBook = JSON.stringify(book)
console.log(jsonBook)

// Create object from JSON
const parsedData = JSON.parse(jsonBook)
console.log(parsedData.author)

//Save to json file
//fs.writeFileSync('1-json.json',jsonBook)

//Get contents of json file
const bufferedData = fs.readFileSync('1-json.json')
console.log(bufferedData.toString())