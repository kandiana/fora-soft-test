import { io } from 'socket.io-client';

import { saveSocketInstance } from '../actions/socket';
import { addNewUser, removeDisconnectedUser } from '../actions/usersOnline';
import { updateMessagesList } from '../actions/messages';

import { saveUserData } from './user';

export const createSocketInstance = ({ room, username, create }) => {
  return (dispatch, getState) => {
    if (getState().socket) {
      return;
    }

    const socket = io();
    dispatch(saveSocketInstance(socket));

    socket.emit('join room', JSON.stringify({ room, username, create }));

    // save user data to store after getting socket.client.id
    socket.on('id', (id) => {
      dispatch(saveUserData({ room, id }));
    });

    // new data handlers
    socket.on('new user', (userData) => {
      dispatch(addNewUser(JSON.parse(userData)));
    });

    socket.on('user disconnected', (userId) => {
      dispatch(removeDisconnectedUser(userId));
    });

    socket.on('chat message', (messageData) => {
      dispatch(updateMessagesList(JSON.parse(messageData)));
    });
  };
};
