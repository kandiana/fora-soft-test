import { saveMessagesHistory, updateMessagesList } from '../actions/messages';

export const sendMessage = (text) => {
  if (!text) {
    return;
  }

  return (dispatch, getState) => {
    const state = getState();

    const message = {
      username: state.user.name,
      id: state.user.id,
      timestamp: Date.now(),
      text,
    };

    state.socket.emit('chat message', JSON.stringify(message));

    dispatch(updateMessagesList(message));
  };
};

export const getOldMessages = (room) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/${room}/messages?size=100`
      );

      const data = await response.json();

      dispatch(saveMessagesHistory(data.messages));
    } catch (err) {
      console.log(err);
    }
  };
};
