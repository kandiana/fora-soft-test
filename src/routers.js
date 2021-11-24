const express = require('express');

const { loadFront } = require('./utils');
const checkRoom = require('./controllers/checkRoom');

// main routes
const mainRouter = new express.Router();

mainRouter.get('/:room', checkRoom); // if room doesn't exist, redirects to /
mainRouter.use('/', loadFront);

exports.mainRouter = mainRouter;
