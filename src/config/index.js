const path = require('path');

const PORT = process.env.PORT || 3000;
const clientFolder = path.resolve(__dirname, '../..', 'client');

module.exports = {
  PORT,
  clientFolder,
};
