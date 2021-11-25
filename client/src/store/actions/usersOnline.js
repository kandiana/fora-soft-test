export const SAVE_USERS_ALREADY_IN_CHAT = 'SAVE_USERS_ALREADY_IN_CHAT';
export const ADD_NEW_USER = 'ADD_NEW_USER';
export const REMOVE_DISCONNECTED_USER = 'REMOVE_DISCONNECTED_USER';

export const saveUsersAlreadyInChat = (users) => {
  return { type: SAVE_USERS_ALREADY_IN_CHAT, users };
};

export const addNewUser = (user) => {
  return { type: ADD_NEW_USER, user };
};

export const removeDisconnectedUser = (userId) => {
  return { type: REMOVE_DISCONNECTED_USER, userId };
};
