import { SAVE_SOCKET_INSTANCE } from '../actions/socket';

export const socketReducer = (state = null, action) => {
  switch (action.type) {
    case SAVE_SOCKET_INSTANCE:
      return action.socket;

    default:
      return state;
  }
};
