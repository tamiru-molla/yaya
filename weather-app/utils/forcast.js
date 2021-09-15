const request = require("request");
const geocode = require("./geocode.js");

const forcast = (latitude,longitiude, callBack) => {
 

 const url = `http://api.weatherstack.com/current?access_key=4a427377512fbeb97f33158338d7b6b3&query=${latitude},${longitiude}`
 request({url: url,json: true}, (error, response) => {
  if (error) {
   callBack("Unable to connect to Weather Service", undefined)
  } else if (response.body.features.length === 0) {
   callBack("Unable to Find Location", undefined)
  } else {
   callBack(undefined, {
    coordinate: response.body.features[0].center.join(),
    place_name: response.body.features[0].place_name

   })
  }
 })
}


module.exports = forcast