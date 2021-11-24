import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { nanoid } from 'nanoid';

import { createSocketInstance } from '../../store/thunk';

import { Input } from '../../components/Input/Input';
import { Button } from '../../components/Button/Button';

import './StartPage.css';

export const StartPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { room } = useParams();

  const [username, setUsername] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const userRoom = room || nanoid();

    dispatch(createSocketInstance(username, userRoom));

    navigate(`/${userRoom}`);
  };

  const handleChange = (event) => {
    setUsername(event.currentTarget.value);
  };

  return (
    <form className="StartPage" onSubmit={handleSubmit}>
      <Input
        id="username"
        name="username"
        value={username}
        placeholder="Your username"
        required={true}
        onChange={handleChange}
      />
      <Button>{room ? 'Join chat room' : 'Create chat room'}</Button>
    </form>
  );
};
