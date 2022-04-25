'use strict';
import express from "express";
import bodyParser from 'body-parser';
require('dotenv').config();
import viewEngine from '../src/configs/viewEngine';
import webRoute from '../src/routes/route';
const expressLayouts = require('express-ejs-layouts');
import config from './config';
import cors from 'cors';

const eventRoutes = require("./routes/eventRoutes");
let app = express();

app.use(bodyParser.json());
app.use(expressLayouts);
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', eventRoutes.routes)
viewEngine(app);
webRoute(app);

let port = process.env.PORT || 8080;
console.log(port);
app.listen(port,() =>{
    console.log('May len hộ tao: '+ port);
})

