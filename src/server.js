require('dotenv').config();

const express = require('express');
const mongoClient = require('./db');
const setupMiddlewares = require('./middlewares');

const { mainRouter, apiRouter } = require('./routers');

const app = express();

// connect to database and if succeeded start server and sockets
let db;
mongoClient(app).then((database) => {
  db = database;
});

// save db link to req.db
app.use((req, res, next) => {
  req.db = db;
  next();
});

// setup other middlewares
setupMiddlewares(app);

// setup routes
app.use('/api', apiRouter); // front
app.use('/', mainRouter); // front
