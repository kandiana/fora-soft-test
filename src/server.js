require('dotenv').config();

const express = require('express');
const http = require('http');

const { PORT } = require('./config');
const { mainRouter } = require('./routers');
const ws = require('./sockets');

const app = express();

// main routes
app.use('/', mainRouter);

const server = http.createServer(app);
ws(server);

server.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
