const fs = require('fs')
const chalk = require('chalk')

const getNotes = function () {
    return "Notes..."
}


// fot Adding note to .json file
const addNote = function (title, body) {
    const notes = loadNotes()

    const duplicateNotes = notes.filter(function(note) {
        return note.title === title
    })
    if (duplicateNotes.length === 0){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green('Note added succesfully'))
    }else{
        console.log(chalk.red('Note title already taken!'))
    }


   
}

/// for loading notes from .json file
const loadNotes = function () {
    try {
        let fileData = fs.readFileSync('notes.json')
        let jsonData = fileData.toString()
        return JSON.parse(jsonData)
    } catch (error) {
       // console.log(error)
        return []
    }
}


/// for saving data to .json file
const saveNotes = function(notes) {
    const notesJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', notesJSON)
}




module.exports = {
    getNotes: getNotes,
    addNote: addNote
}