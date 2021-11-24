const { Server } = require('socket.io');

module.exports = (server) => {
  const io = new Server(server);
  const history = [];
  const clients = {};

  io.on('connection', (socket) => {
    console.log('a user connected');

    const clientId = socket.client.id;

    socket.emit('old messages', JSON.stringify(history.reverse()));
    socket.emit('users online', JSON.stringify(clients));
    socket.emit('id', clientId);

    socket.on('disconnect', () => {
      console.log('user disconnected');
      clients[clientId] = undefined;
      io.emit('user disconnected', clientId);
    });

    socket.on('new user', (username) => {
      clients[clientId] = username;
      io.emit('new user', JSON.stringify({ [clientId]: username }));
    });

    socket.on('chat message', (message) => {
      console.log(`message: ${message}`);
      io.emit('chat message', message);
      history.push(JSON.parse(message));
    });
  });
};
