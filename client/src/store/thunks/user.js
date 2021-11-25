import { saveUserId, saveUserName, saveUserRoom } from '../actions/user';

export const saveUserData = ({ name, room, id }) => {
  return (dispatch) => {
    dispatch(saveUserName(name));
    dispatch(saveUserRoom(room));
    dispatch(saveUserId(id));
  };
};
