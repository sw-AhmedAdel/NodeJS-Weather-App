const express = require('express');
const api = express.Router();
const weatherRoute = require('./weather/weather.routes')

api.use('/weather', weatherRoute)
module.exports = api;