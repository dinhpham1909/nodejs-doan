'use strict';
const req = require('express/lib/request');
const eventData = require('../data/events');
let tableIndex = async(req, res) => {
    try {
        const events = await eventData.getEvents();
        res.render('pages/table', { events: events });
    } catch (error) {
        console.log(error);
    }

}

let dashboardIndex = (req, res) => {
    res.render('pages/dashboard');
}
let addIndex = (req, res) => {
    res.render('events/add');
}
let editProduct = async(req, res) => {
    try {
        const id_product =  req.params.id_product;
        const oneEvent = await eventData.getById(id_product);
        res.render('events/edit', {oneEvent: oneEvent[0]});
    } catch (error) {
        res.status(400).send(error.message);
    }
    
}
let addProdut = async(req,res) => {
    console.log(req.body)
    try {
        const data = req.body;
        const insert = await eventData.insertProduct(data);
        return res.redirect('/table');
    } catch (error) {
        res.status(400).send(error.message);
    }
}
let deleteProduct = async(req,res) => {
    console.log(req.params.id_product);
    try {
        const id_product = req.params.id_product;
        const deletedEvent = await eventData.deleteProduct(id_product);
        return res.redirect('/table');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

let updateProduct = async(req,res) =>{
    try {
        const data = req.body;
        const update = await eventData.updateProduct(data);
        return res.redirect('/table');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    updateProduct:updateProduct,
    tableIndex: tableIndex,
    dashboardIndex:dashboardIndex,
    addIndex:addIndex,
    addProdut:addProdut,
    deleteProduct:deleteProduct,
    editProduct:editProduct,
 
};