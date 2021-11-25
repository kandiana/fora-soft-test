const MongoClient = require('mongodb').MongoClient;
const http = require('http');
const ws = require('../sockets');

const { PORT, DB_URL, DB_NAME } = require('../config');

module.exports = async (app) => {
  let client;

  try {
    // connect to database
    client = await MongoClient.connect(DB_URL);

    if (process.env.NODE_ENV === 'development') {
      console.log(`MongoDB connected on ${DB_URL}`);
    }

    const db = client.db(DB_NAME);

    // start server
    const server = http.createServer(app);
    server.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });

    // open socket connection
    ws(server, db);

    return db;
  } catch (err) {
    console.log(err);
  }
};
