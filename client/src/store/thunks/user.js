import { saveUserId, saveUserName, saveUserRoom } from '../actions/user';

export const saveUserData = ({ name, room, id }) => {
  return (dispatch) => {
    if (name) {
      dispatch(saveUserName(name));
    }
    if (room) {
      dispatch(saveUserRoom(room));
    }

    if (id) {
      dispatch(saveUserId(id));
    }
  };
};
