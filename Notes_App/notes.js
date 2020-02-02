const fs = require('fs')
const chalk = require('chalk')


// for Adding note to .json file
const addNote = (title, body) => {
    const notes = loadNotes()
    //const duplicateNotes = notes.filter((note) => note.title === title)
    const duplicateNote = notes.find((note) => note.title === title)

    if (!duplicateNote){
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

// for removing note from .json file
const removeNote = (title) => {
    const notes = loadNotes()
    let notesToKeep = notes.filter((note) => note.title !== title)

    if (notesToKeep.length < notes.length){
        console.log(chalk.green(`Note with title "${title}" deleted succesfully`))
        saveNotes(notesToKeep)
    }else{
        console.log(chalk.red(`Note with title "${title}" not found`))
    
    } 
}

// for listing all saved notes in .json file
const listNotes = () =>{
    const savedNotes = loadNotes()

    console.log(chalk.inverse("Your saved notes"))

    savedNotes.forEach((note) => {
        console.log(note.title)
    });
}

// for reading notes from .json file
const readNotes = (title) => {
     const notes = loadNotes()
     const foundNote = notes.find((note) => note.title === title)

     if (foundNote) {
         console.log(chalk.blue(`${foundNote.title}`))
         console.log(foundNote.body)
     } else {
         console.log(chalk.red('Note not found'))
     }



}




/// for loading notes from .json file
const loadNotes = () => {
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

/// for exporting to other files
module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNotes: readNotes
}