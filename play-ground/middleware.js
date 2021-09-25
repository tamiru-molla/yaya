const express = require('express');
const path = require('path');

const app = express()
app.use(express.static(path.join(__dirname,"./public")))
app.use("/*",(req,res,next)=>{
  req.name = req.query.name //. assign property for req obj
  res.name = arg=> req.query.name +"==>"+ arg;
   // assign function for res obj
  next()
  
})



app.get("/home",(req,res)=>{
 console.log(res.name("mike"));
  res.send({name:req.name})
  
})







app.listen(3000,()=>console.log("start"))