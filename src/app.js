const express = require('express');
const app =express();
const path = require('path');
const api = require('./routes/api');

app.use('/v1', api)

const hbs = require('hbs');
app.use(express.static(path.join(__dirname,'..', 'public')));


app.set('view engine','hbs' );
const viewsdir = path.join(__dirname,'..','templates','views');
const partialsPath = path.join(__dirname,'..','templates','partials');
hbs.registerPartials(partialsPath);

app.set('views', viewsdir)



app.get('/v1/weather/help/*' , (req , res) => {
  res.render('404', {
    title:"404",
    name:"ahmed adel",
    message:"help text is not found"
  })
})

 app.get('*' , (req , res) => {
  res.render('404', {
    title:"404",
    name:"ahmed adel",
    message:"page is not found"
  })
})
module.exports = app;
