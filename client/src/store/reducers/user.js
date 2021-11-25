import { SAVE_USER_NAME, SAVE_USER_ID, SAVE_USER_ROOM } from '../actions/user';

export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case SAVE_USER_NAME:
      return {
        ...state,
        name: action.name,
      };

    case SAVE_USER_ID:
      return {
        ...state,
        id: action.id,
      };

    case SAVE_USER_ROOM:
      return {
        ...state,
        room: action.room,
      };

    default:
      return state;
  }
};
