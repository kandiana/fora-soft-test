import { useSelector } from 'react-redux';
import './UsersList.css';

export const UsersList = () => {
  const users = useSelector((state) => state.usersOnline);
  const userData = useSelector((state) => state.user);

  const printUsersList = () => {
    if (!users) {
      return;
    }

    const userNames = Object.keys(users).map((key) => users[key]);
    console.log(userNames.sort());

    return Object.keys(users)
      .map((key) => [key, users[key]])
      .sort((a, b) => {
        if (a[1].toLowerCase() < b[1].toLowerCase()) {
          return -1;
        }

        if (a[1].toLowerCase() > b[1].toLowerCase()) {
          return 1;
        }

        return a[1] < b[1] ? 1 : -1;
      })
      .map(([key, value]) => (
        <p
          className={`UsersList__item ${
            userData.id === key ? 'UsersList__you' : ''
          }`}
          key={key}
        >
          {value}
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
