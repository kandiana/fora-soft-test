export const SAVE_SOCKET_INSTANCE = 'CREATE_SOCKET_INSTANCE';
export const SAVE_USERNAME = 'SAVE_USERNAME';
export const SAVE_USER_ID = 'SAVE_USER_ID';
export const SAVE_MESSAGES_HISTORY = 'SAVE_MESSAGES_HISTORY';
export const SEND_MESSAGE = 'SEND_MESSAGE';
export const UPDATE_MESSAGES_LIST = 'UPDATE_MESSAGES_LIST';
export const SAVE_USERS_ONLINE = 'SAVE_USERS_ONLINE';
export const ADD_NEW_USER = 'ADD_NEW_USER';
export const REMOVE_DISCONNECTED_USER = 'REMOVE_DISCONNECTED_USER';

export const saveSocketInstance = (socket) => {
  return { type: SAVE_SOCKET_INSTANCE, socket };
};

export const saveUsername = (username) => {
  return { type: SAVE_USERNAME, username };
};

export const saveUserId = (userId) => {
  return { type: SAVE_USER_ID, userId };
};

export const saveMessagesHistory = (history) => {
  return { type: SAVE_MESSAGES_HISTORY, history };
};

export const sendMessage = (messageText) => {
  return { type: SEND_MESSAGE, messageText };
};

export const updateMessagesList = (messageData) => {
  return { type: UPDATE_MESSAGES_LIST, messageData };
};

export const saveUsersOnline = (users) => {
  return { type: SAVE_USERS_ONLINE, users };
};

export const addNewUser = (userData) => {
  return { type: ADD_NEW_USER, userData };
};

export const removeDisconnectedUser = (userId) => {
  return { type: REMOVE_DISCONNECTED_USER, userId };
};
