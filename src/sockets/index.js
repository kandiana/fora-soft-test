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

    socket.on('join room', async (data) => {
      const { room, username, create } = JSON.parse(data);

      clientRoom = room;
      socket.join(clientRoom);

      socket.emit('id', clientId);

      const userData = { [clientId]: username };

      if (create) {
        await insertDataToDB(db, clientRoom, {
          _id: 'users',
          ...userData,
        });
      } else {
        await addDataToDocument(db, clientRoom, 'users', userData);
      }

      io.to(clientRoom).emit('new user', JSON.stringify(userData));
    });

    socket.on('disconnect', async () => {
      console.log('user disconnected');

      if (clientRoom) {
        await removeDataFromDocument(db, clientRoom, 'users', {
          [clientId]: '',
        });

        io.to(clientRoom).emit('user disconnected', clientId);
      }
    });

    socket.on('chat message', async (message) => {
      console.log(`message: ${message}`);

      await insertDataToDB(db, clientRoom, JSON.parse(message));

      socket.broadcast.to(clientRoom).emit('chat message', message);
    });
  });
};
