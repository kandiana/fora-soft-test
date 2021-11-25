import { saveUsersAlreadyInChat } from '../actions/usersOnline';

export const getUsersOnline = (room) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/${room}/users`
      );

      const data = await response.json();

      dispatch(saveUsersAlreadyInChat(data.users));
    } catch (err) {
      console.log(err);
    }
  };
};
