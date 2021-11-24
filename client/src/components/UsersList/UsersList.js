import './UsersList.css';

export const UsersList = () => {
  const users = ['user1', 'user2', 'user3'];

  return (
    <ul className="UsersList">
      {users.map((user, i) => (
        <p className="UsersList__item" key={`${i}_${user}`}>
          {user}
        </p>
      ))}
    </ul>
  );
};
