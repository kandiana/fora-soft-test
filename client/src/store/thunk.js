import { io } from 'socket.io-client';

import {
  saveUsername,
  saveUserId,
  saveSocketInstance,
  saveMessagesHistory,
  updateMessagesList,
  saveUsersOnline,
  addNewUser,
  removeDisconnectedUser,
} from './actions';

export const createSocketInstance = (username, room) => {
  return (dispatch, getState) => {
    if (getState().socket) {
      return;
    }

    // create and save socket instance
    const socket = io();

    dispatch(saveSocketInstance(socket));

    // save username (locally and on server)
    socket.emit('join room', JSON.stringify({ room, username }));
    // socket.emit('new user', username);
    dispatch(saveUsername(username));

    // collect old data
    socket.on('old messages', (history) => {
      dispatch(saveMessagesHistory(JSON.parse(history)));
    });

    socket.on('users online', (users) => {
      dispatch(saveUsersOnline(JSON.parse(users)));
    });

    socket.on('id', (userId) => {
      dispatch(saveUserId(userId));
    });

    // new data handlers
    socket.on('new user', (userData) => {
      dispatch(addNewUser(JSON.parse(userData)));
    });

    socket.on('user disconnected', (userId) => {
      dispatch(removeDisconnectedUser(userId));
    });

    socket.on('chat message', (messageData) => {
      console.log(messageData);
      dispatch(updateMessagesList(JSON.parse(messageData)));
    });
  };
};
