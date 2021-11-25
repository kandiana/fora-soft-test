export const SAVE_USER_NAME = 'SAVE_USER_NAME';
export const SAVE_USER_ID = 'SAVE_USER_ID';
export const SAVE_USER_ROOM = 'SAVE_USER_ROOM';

export const saveUserName = (name) => {
  return { type: SAVE_USER_NAME, name };
};

export const saveUserId = (id) => {
  return { type: SAVE_USER_ID, id };
};

export const saveUserRoom = (room) => {
  return { type: SAVE_USER_ROOM, room };
};
