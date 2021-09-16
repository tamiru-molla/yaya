const express = require("express")
const hbs = require("hbs")
const path = require("path")
const geocode = require("./utils/geocode")
const forcast = require("./ utils/forcast")

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
   title:"Weather"
  })
})
app.get('/about',(req,res)=>{ 
  res.render("about.hbs",{
   name:"mike",
   title:"About Us"
  })
})
app.get('/help', (req, res) => {
  res.render("help.hbs", {
    name: "mike",
    title: "Any Help"
  }) 
})
app.get('/weather', (req, res) => { 
  
  if(!req.query.address)return res.send({error: "eneter valid address"})
  geocode(req.query.address,(error,{coordinate,place_name}={})=>{
    
    if(error)return res.send({error:error})
    forcast(coordinate,(error,{ forcast }={})=>{
      if(error) return res.send({error:error})
      res.send({address : place_name ,forcast})
      })
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
  error :"page not Found"
 })
})




app.listen(3000, () => console.log("Server is up on port 3000"))
