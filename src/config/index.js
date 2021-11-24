const path = require('path');

const PORT = process.env.PORT || 3000;
const DB_URL = process.env.DB_URL || 'mongodb://localhost:27017';

const clientFolder = path.resolve(__dirname, '../..', 'client');

module.exports = {
  PORT,
  DB_URL,
  clientFolder,
};
