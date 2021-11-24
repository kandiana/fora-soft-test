import { useSelector } from 'react-redux';
import './UsersList.css';

export const UsersList = () => {
  const users = useSelector((state) => state.usersOnline);
  const userData = useSelector((state) => state.user);

  const printUsersList = () => {
    if (!users) {
      return;
    }

    return Object.keys(users).map((key) => (
      <p
        className={`UsersList__item ${
          userData.id === key ? 'UsersList__you' : ''
        }`}
        key={key}
      >
        {users[key]}
      </p>
    ));
  };

  return (
    <ul className="UsersList">
      <h3 className="UsersList__title">Users:</h3>
      {printUsersList()}
    </ul>
  );
};
