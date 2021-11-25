import {
  SAVE_MESSAGES_HISTORY,
  UPDATE_MESSAGES_LIST,
} from '../actions/messages';

export const messagesReducer = (state = [], action) => {
  switch (action.type) {
    case SAVE_MESSAGES_HISTORY:
      return [...state, ...action.history];

    case UPDATE_MESSAGES_LIST:
      return [action.message, ...state];

    default:
      return state;
  }
};
