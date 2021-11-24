const path = require('path');

const PORT = process.env.PORT || 3000;
const DB_URL = process.env.DB_URL;
const DB_NAME = process.env.DB_NAME;

const clientFolder = path.resolve(__dirname, '../..', 'client');

module.exports = {
  PORT,
  DB_URL,
  DB_NAME,
  clientFolder,
};
