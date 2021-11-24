import { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';

import { createSocketInstance } from '../../store/thunk';

import { Input } from '../../components/Input/Input';
import { Button } from '../../components/Button/Button';

import './StartPage.css';

export const StartPage = () => {
  // const navigate = useNavigate();
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(createSocketInstance(username));

    // navigate('/chatroom');
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
      <Button>Join chat room</Button>
    </form>
  );
};
