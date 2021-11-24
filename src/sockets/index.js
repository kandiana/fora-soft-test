const { Server } = require('socket.io');

module.exports = (server) => {
  const io = new Server(server);
  const history = {};
  const clients = {};

  io.on('connection', (socket) => {
    console.log('a user connected');

    const clientId = socket.client.id;
    let clientRoom;

    socket.on('disconnect', () => {
      console.log('user disconnected');
      if (clientRoom) {
        clients[clientRoom][clientId] = undefined;
        io.to(clientRoom).emit('user disconnected', clientId);
      }
    });

    socket.on('join room', (data) => {
      const { room, username } = JSON.parse(data);
      console.log(room, username);
      clientRoom = room;
      socket.join(clientRoom);

      if (!history[clientRoom]) {
        history[clientRoom] = [];
      }

      if (!clients[clientRoom]) {
        clients[clientRoom] = {};
      }

      socket.emit(
        'old messages',
        JSON.stringify(history[clientRoom].reverse())
      );
      socket.emit('users online', JSON.stringify(clients[clientRoom]));
      socket.emit('id', clientId);

      clients[clientRoom][clientId] = username;
      io.to(clientRoom).emit(
        'new user',
        JSON.stringify({ [clientId]: username })
      );
    });

    socket.on('chat message', (message) => {
      console.log(`message: ${message}`);
      io.to(clientRoom).emit('chat message', message);
      history[clientRoom].push(JSON.parse(message));
    });
  });
};
