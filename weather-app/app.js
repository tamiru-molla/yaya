const request = require('request');
const getWeather=(countryName)=>{
    let url;
    const mapBox = `https://api.mapbox.com/geocoding/v5/mapbox.places/${countryName}.json?access_token=pk.eyJ1Ijoicm9vdGNvZGUyNDI0IiwiYSI6ImNrdGpqdW1hNzFjbTcycnJ0b2t3OW95bzUifQ.gSCGIWN2y-9cwvW49c_Rjw&limit=1`
    // fetch coordinate
    getCoordinate(mapBox)
 
}
const getCoordinate=(mapBox)=>{
       request({url: mapBox,json: true,}, (err, response) => {
           const coordinate = response.body.features[0].center.join()
           url = `http://api.weatherstack.com/current?access_key=4a427377512fbeb97f33158338d7b6b3&query=${coordinate}`
           getWeather(url);

       });
}
 const getWeather = (url=>{
      // fetching weather info
      let data;
      request({url: url,json: true,}, (err, response) => {
      
      console.log( response.body.current.weather_descriptions[0])
      });

    
 })
 getCoordinate("Ethiopia");

 

