import express from "express";
import homeController from '../controllers/homeController'
let router = express.Router();

let initWebRoute = (app) => {
    app.get('/', homeController.homeIndex);
    app.get('/about', homeController.getAboutPage);

    return app.use('/', router);
}

module.exports = initWebRoute;