const request = require("request");

const geocode =(address,callBack)=>{
 const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1Ijoicm9vdGNvZGUyNDI0IiwiYSI6ImNrdGpqdW1hNzFjbTcycnJ0b2t3OW95bzUifQ.gSCGIWN2y-9cwvW49c_Rjw&limit=1`
 request({url:url,json:true} , (error,response)=>{
  if(error){
    callBack("Unable to connect to Location Service",undefined) 
  }else if(response.body.features.length===0){
   callBack("Unable to Find Location", undefined)
  }else{
    
    
   callBack(undefined,{
    coordinate: response.body.features[0].center.join(),
    place_name: response.body.features[0].place_name

   })
  }
 })
}


module.exports=geocode