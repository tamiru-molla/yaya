const request = require("request");

const forcast = (coordinate, callBack) => {
 
const url = `http://api.weatherstack.com/current?access_key=4a427377512fbeb97f33158338d7b6b3&query=${coordinate}`
 
 request({url: url,json: true}, (error, {body}) => {
  if (error) {
   callBack("Unable to connect to Weather Service", undefined)
  } else if (body.error) {
   callBack("Unable to Find Location", undefined)
   
  } else {
   callBack(undefined, {
    forcast: body.current.weather_descriptions[0],
    
   

   })
  }
 })
}


module.exports = forcast