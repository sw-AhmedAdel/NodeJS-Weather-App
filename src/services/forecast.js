
const request = require('request');

function forecast (long , lat , callback)  {
  const url=`http://api.weatherstack.com/current?access_key=3df6df9d1f4cf2a4fcf31235d7bae4c6&query=${lat},${long}&units=f`
 request({url , json:true} , (error , {body}= {})  => {
   if(error ) {
     callback('unable to connect to the weather app,you made many reqyests in few sec please try again after few mins',undefined)
   }
   else if(body.error) {
     callback('Please specify a valid location ', undefined)
   }
   else {
    callback(undefined , `${ body.current.temperature}°F|°C degress out, weather description is ${body.current.weather_descriptions},
    time is:${body.current.observation_time}, wind speed is :${ body.current.wind_speed} km/h` )
   }
 })
}

module.exports = {
  forecast,
}

 