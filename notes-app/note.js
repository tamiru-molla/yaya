const fs = require("fs");
const chalk = require("chalk");

function addNote(title, body) {
    const notes = loadNote();
    const duplicateNote = notes.filter(note => note.title === title)

    if (duplicateNote.length == 0) {
        notes.push({
            title: title,
            body: body
        })
        console.log("new note added")
    } else {
        console.log("title u enter is occupied")
    }
    saveNote(notes)

}


function removeNote(title) {
    let notes = loadNote();
    notes = notes.filter(note => note.title !== title)
    saveNote(notes);

}

function loadNote() {
    try {
        const bufferData = fs.readFileSync("./note.json");
        const jsonObj = bufferData.toString();
        const jsonData = JSON.parse(jsonObj);
        return jsonData;
    } catch (error) {
        return [];
    }
}

function saveNote(note) {
    const jsonData = JSON.stringify(note);
    fs.writeFileSync("./note.json", jsonData)
}

function getNote(title) {
    const notes = loadNote();
    const note = notes.find(note => title === note.title)
    if (note) {
        console.log(chalk.green.inverse(note.title))
        console.log(note.body)
    } else {
        console.log(chalk.red.inverse("Error"))
    }
}

function listNote() {
    console.log(chalk.inverse("my Notes"))
    loadNote().forEach(element => console.log(chalk.green(element.title)));
}

module.exports = {
    addNote: addNote,
    getNote: getNote,
    listNote: listNote,
    removeNote: removeNote
}
