const request = require('request');
const geocode = require('./utils/geocode.js');
const forcast = require('./utils/forcast.js');

const address = process.argv[2];
console.log(address)

geocode(addres,(err,{coordinate,place_name})=>{

     if (err) {
          console.log(error)
     }else {
      forcast (coordinate,(err,response)=>{
        if(err) {
            console.log(err)
            
        }else{
            console.log(place_name)
            console.log(response.forcast)
        }

       })
     }
  
})
