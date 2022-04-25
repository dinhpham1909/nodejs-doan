'use strict';

import express from 'express';
import eventsController from '../controllers/eventsController';
const router = express.Router();

const {getEvents,getEvent} =eventsController;


router.get('/events',getEvents);
router.get('/events/:id',getEvent);
module.exports={
    routes:router
}