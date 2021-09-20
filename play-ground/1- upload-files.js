const multer = require("multer")
const express = require("express")
const path = require("path")
const jimp = require("jimp")
const fs = require("fs")



const upload = multer({dest: path.join(__dirname,'./utils/temp')})

const app = express()  
app.use(express.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,'/public')))
// const uploadPhoto = upload.fields([{name:'photo',maxCount:1},{name:"avater"},{maxCount:4}])
const uploadPhoto = upload.single("photo")

app.post('/file',uploadPhoto,async(req,res)=>{

  const item = req.file;
  
  const newPath = `./utils/upload/${item.originalname}`
   fs.renameSync(item.path, newPath)
  const imag = await jimp.read(newPath)
  imag.resize(200, jimp.AUTO)
  imag.quality(10)
  await imag.write(newPath)
  
    // const allfile = fs.readdirSync("./utils/upload")
    // console.log(allfile);
    
 
  res.json({name:allfile})
})




app.listen(3000,()=>console.log('start'))