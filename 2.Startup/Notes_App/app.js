const chalk = require('chalk')
const  notes = require('./notes.js')

console.log(notes())


console.log(chalk.green(
    'I am a green line ' +
    chalk.blue.underle.inverse.bold('with a blue substring') +
    ' that becomes green again!'
))