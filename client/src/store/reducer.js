import {
  SAVE_SOCKET_INSTANCE,
  SAVE_USERNAME,
  SAVE_USER_ID,
  SAVE_MESSAGES_HISTORY,
  SEND_MESSAGE,
  UPDATE_MESSAGES_LIST,
  SAVE_USERS_ONLINE,
  ADD_NEW_USER,
  REMOVE_DISCONNECTED_USER,
} from './actions';

export const INITIAL_STATE = {
  messagesList: [],
  usersOnline: {},
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SAVE_SOCKET_INSTANCE:
      return {
        ...state,
        socket: action.socket,
      };

    case SAVE_USERNAME:
      return {
        ...state,
        user: {
          ...state.user,
          name: action.username,
        },
      };

    case SAVE_USER_ID:
      return {
        ...state,
        user: {
          ...state.user,
          id: action.userId,
        },
      };

    case SAVE_MESSAGES_HISTORY:
      return {
        ...state,
        messagesList: [...state.messagesList, ...action.history],
      };

    case SEND_MESSAGE:
      if (action.messageText) {
        state.socket.emit(
          'chat message',
          JSON.stringify({
            username: state.user.name,
            timestamp: Date.now(),
            text: action.messageText,
          })
        );
      }

      return state;

    case UPDATE_MESSAGES_LIST:
      return {
        ...state,
        messagesList: [action.messageData, ...state.messagesList],
      };

    case SAVE_USERS_ONLINE:
      return {
        ...state,
        usersOnline: { ...state.usersOnline, ...action.users },
      };

    case ADD_NEW_USER:
      return {
        ...state,
        usersOnline: { ...state.usersOnline, ...action.userData },
      };

    case REMOVE_DISCONNECTED_USER:
      return {
        ...state,
        usersOnline: { ...state.usersOnline, [action.userId]: undefined },
      };

    default:
      return state;
  }
};
