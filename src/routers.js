const express = require('express');

const { loadFront } = require('./utils');
const checkRoom = require('./controllers/checkRoom');
const api = require('./controllers/api');

// api routes
const apiRouter = new express.Router();

apiRouter.get('/:room/messages', api.readMessages);
apiRouter.get('/:room/users', api.readUsers);

// main (front) routes
const mainRouter = new express.Router();

mainRouter.get('/:room', checkRoom); // if room doesn't exist, redirects to '/'
mainRouter.use('/', loadFront);

module.exports = {
  apiRouter,
  mainRouter,
};
