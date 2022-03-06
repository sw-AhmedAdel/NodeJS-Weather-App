const express = require('express');
const weatherRoute = express.Router();
const { weatherHomePage,
      getWeahter,
      helpPage,
      aboutPage,
      } = require('./weather.controller');


weatherRoute.get('/' , weatherHomePage);
weatherRoute.get('/about' , aboutPage);
weatherRoute.get('/help' , helpPage);
weatherRoute.get('/address' , getWeahter);
 

module.exports = weatherRoute;
