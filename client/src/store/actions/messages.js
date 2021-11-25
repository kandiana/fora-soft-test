export const SAVE_MESSAGES_HISTORY = 'SAVE_MESSAGES_HISTORY';
export const UPDATE_MESSAGES_LIST = 'UPDATE_MESSAGES_LIST';

export const saveMessagesHistory = (history) => {
  return { type: SAVE_MESSAGES_HISTORY, history };
};

export const updateMessagesList = (message) => {
  return { type: UPDATE_MESSAGES_LIST, message };
};
