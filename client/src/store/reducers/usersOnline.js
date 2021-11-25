import {
  SAVE_USERS_ALREADY_IN_CHAT,
  ADD_NEW_USER,
  REMOVE_DISCONNECTED_USER,
} from '../actions/usersOnline';

export const usersOnlineReducer = (state = {}, action) => {
  switch (action.type) {
    case SAVE_USERS_ALREADY_IN_CHAT:
      return {
        ...state,
        ...action.users,
      };

    case ADD_NEW_USER:
      return {
        ...state,
        ...action.user,
      };

    case REMOVE_DISCONNECTED_USER:
      const newState = { ...state };
      delete newState[action.userId];

      return newState;

    default:
      return state;
  }
};
