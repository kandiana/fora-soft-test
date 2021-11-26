const { Server } = require('socket.io');
const {
  insertDataToDB,
  addDataToDocument,
  removeDataFromDocument,
} = require('../utils');

module.exports = (server, db) => {
  const io = new Server(server);

  io.on('connection', (socket) => {
    console.log('a user connected');

    const clientId = socket.id;
    let clientRoom;

    // on joining room save userdata to db, return id to the user and tell everyone in the room about new user
    socket.on('join room', async (data) => {
      const { room, username, create } = JSON.parse(data);

      clientRoom = room;
      socket.join(clientRoom);

      const userData = { [clientId]: username };

      if (create) {
        await insertDataToDB(db, clientRoom, {
          _id: 'users',
          ...userData,
        });
      } else {
        await addDataToDocument(db, clientRoom, 'users', userData);
      }

      socket.emit('id', clientId);
      io.to(clientRoom).emit('new user', JSON.stringify(userData));
    });

    // on disconnect remove user data from db and tell everyone about disconnection
    socket.on('disconnect', async () => {
      console.log('user disconnected');

      if (clientRoom) {
        await removeDataFromDocument(db, clientRoom, 'users', {
          [clientId]: '',
        });

        io.to(clientRoom).emit('user disconnected', clientId);
      }
    });

    // on new message save it to db and broadcast it to everyone in the room
    socket.on('chat message', async (message) => {
      console.log(`message: ${message}`);

      await insertDataToDB(db, clientRoom, JSON.parse(message));

      socket.broadcast.to(clientRoom).emit('chat message', message);
    });
  });
};
