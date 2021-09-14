 const notes = require("./note.js");
 const fs = require("fs");
 const yargs = require("yargs");


 // add Note
 yargs.command({
     command: "add",
     description: "add note",
     builder: {
         title: {
             description: "Note Title",
             demandOption: true,
             type: "string"
         },

         body: {
             description: "Note body",
             demandOption: true,
             type: "string"
         }
     },
     handler: argv => notes.addNote(argv.title, argv.body)
 })

 // Remove Note 
 yargs.command({
     command: "remove",
     description: "add note",
     builder: {
         title: {
             description: "Note Title",
             demandOption: true,
             type: "string"
         }
     },

     handler: argv => notes.removeNote(argv.title)
 })

 // Read notes
 yargs.command({
     command: "read",
     description: "read",
     builder: {
         title: {
             description: "Note Title",
             demandOption: true,
             type: "string"
         }
     },
     handler: argv => notes.getNote(argv.title)

 })

 //List notes
 yargs.command({
     command: "list",
     description: "list note",
     handler: () => notes.listNote()

 })


 yargs.parse();
