'use strict';
import express from "express";
import homeController from '../controllers/homeController'

let router = express.Router();

let initWebRoute = (app) => {
    app.get('/table', homeController.tableIndex);
    app.get('/dashboard', homeController.dashboardIndex);
    app.get('/add', homeController.addIndex);
    app.get('/edit/:id_product', homeController.editProduct);
    app.post('/update-product', homeController.updateProduct);
    app.post('/add-product', homeController.addProdut);
    app.get('/delete-product/:id_product',homeController.deleteProduct);
    return app.use('/dashboard', router);
}

module.exports = initWebRoute;
