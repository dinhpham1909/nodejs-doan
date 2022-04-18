import express from "express";
import bodyParser from 'body-parser';
require('dotenv').config();
import viewEngine from '../src/configs/viewEngine';
import webRoute from '../src/routes/route';
const expressLayouts = require('express-ejs-layouts');

let app = express();

app.use(bodyParser.json());
app.use(expressLayouts);
app.use(bodyParser.urlencoded({ extended: true }))
viewEngine(app);
webRoute(app);

let port = process.env.PORT || 8080;
console.log(port);
app.listen(port,() =>{
    console.log('May len hộ tao: '+ port);
})

