import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { sendMessage } from '../../store/actions';

import { Button } from '../Button/Button';
import { Input } from '../Input/Input';

import './ChatInput.css';

export const ChatInput = () => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(sendMessage(message));

    setMessage('');
  };

  const handleChange = (event) => {
    setMessage(event.currentTarget.value);
  };

  return (
    <form className="ChatInput" onSubmit={handleSubmit}>
      <Input
        id="message"
        name="message"
        value={message}
        onChange={handleChange}
      />
      <Button>Send</Button>
    </form>
  );
};
