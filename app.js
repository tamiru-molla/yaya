 const notes= require("./note.js");
 const fs = require("fs");
 const yargs = require("yargs");

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
  handler: argv => notStrictEqual.addNote(argv.title,argv.body)
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
     }},  
     
    handler: argv => notes.remove(argv.title)
    })
 // Read notes
 yargs.command({
  command: "read",
  description: "read",
  builder: {

  },
  handler: argv => {

   fs.readFile(`./${argv.title}`, "UTF-8", (error, data) => console.log(data))
  }


 })
 //List notes
 yargs.command({
  command: "list",
  description: "list note",
  handler: argv => console.log("my arg v", argv)

 })


 yargs.parse();
 // fs.readFile("./note.txt","utf-8",(error,data)=>console.log(data))
 