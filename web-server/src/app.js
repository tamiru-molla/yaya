const express = require("express")
const hbs = require("hbs")
const path = require("path")

const app =express();

// define paths for Express
const publicDirPath = path.join(__dirname,"../public")
const partialDirPath = path.join(__dirname,"../templates/partials")
const viewsDirPath = path.join(__dirname,"../templates/views")

// setup static directry to serve
app.use(express.static(publicDirPath))

// setup handlebar engine and views locations
app.set("views engine","hbs")
app.set("views",viewsDirPath)
hbs.registerPartials(partialDirPath);

app.get("/",(req,res)=>{
  res.render("index.hbs",{
   name:"mike",
   title:"Home"
  })
})
app.get('/about',(req,res)=>{
  res.render("about.hbs",{
   name:"mike",
   title:"About"
  })
})

app.get('/help/*', (req, res) => {
 res.render("404.hbs", {
  name: "mike",
  title: "404",
  error: "article not found"
 })
})

app.get('*', (req, res) => {
 res.render("404.hbs", {
  name: "mike",
  title: "404",
  error :"not Found"
 })
})




app.listen(3000, () => console.log("Server starts at port 3000"))
