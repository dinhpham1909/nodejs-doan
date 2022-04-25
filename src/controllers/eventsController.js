'use strict';

const req = require('express/lib/request');
const eventData = require('../data/events');

const getEvents = async (req,res,next) =>{
    try {
        const events = await eventData.getEvents();
        res.send(JSON.stringify(events));
    } catch (error) {
        res.startus(400).send(error.message);
    }
}
const getEvent=async (req,res,next) =>{
    try {
        const id_product =  req.params.id;
        const oneEvent = await eventData.getById(id_product);
        res.send(oneEvent);
    } catch (error) {
        res.startus(400).send(error.message);
    }
}

module.exports={
    getEvents,
    getEvent
}