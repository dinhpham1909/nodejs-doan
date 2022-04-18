import express from "express";
import homeController from '../controllers/homeController'
let router = express.Router();

let initWebRoute = (app) => {
    app.get('/dashboard', homeController.dashboardIndex);
    app.get('/table', homeController.tableIndex);
    app.get('/billing', homeController.billingIndex);
    app.get('/profile', homeController.profileIndex);
    app.get('/login', homeController.loginIndex);
    app.get('/register', homeController.registerIndex);

    return app.use('/dashboard', router);
}

module.exports = initWebRoute;