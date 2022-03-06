
const {getGeoCoding} = require('../../services/geocoding');
const {forecast} = require('../../services/forecast')
function weatherHomePage (req , res) {
  res.render('index' , {
    title:"Weather App",
    name:" Ahmed Adel"
  })
}

function getWeahter(req , res) {
  if(!req.query.address) {
    return res.status(400).json({
      error:"addess must be defined"
    })
  }
  
  console.log(req.query)
  const addess = req.query.address;
  
  getGeoCoding(addess , (error , {longitude, latitude, location} ={}) => {
   if(error) {
    return res.status(400).json({error})
   }
 
    forecast(longitude ,latitude, (error , forecastDate) => {
     if(error) {
      return res.status(400).json({error})
     }
   
    return res.status(200).json({
        forecast:forecastDate,
        location ,
        addess,
      })
     
    })
   
  })
}

function aboutPage (req , res) {
  res.render('about', {
    title:'about',
    name:" Ahmed Adel"
  })
}

function helpPage(req , res) {
  res.render('help' , {
    title:"help",
    helptext:"this is help text",
    name:" Ahmed Adel"
  })
}



module.exports= {
  weatherHomePage,
  getWeahter,
  helpPage,
  aboutPage,

}