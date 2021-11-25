import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { sendMessage } from '../../store/thunks/messages';

import { Button } from '../Button/Button';

import './ChatInput.css';

export const ChatInput = () => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();
    }

    dispatch(sendMessage(message.trim()));

    setMessage('');
  };

  const handleChange = (event) => {
    setMessage(event.currentTarget.value);
  };

  // send message on Enter, add line on shift+Enter
  const handleKeyPress = (event) => {
    if (event.code === 'Enter' && !event.shiftKey && message.trim()) {
      event.preventDefault();
      handleSubmit();
    }
  };

  return (
    <form className="ChatInput" onSubmit={handleSubmit}>
      <textarea
        className="ChatInput__input"
        id="message"
        name="message"
        value={message}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
      <Button>Send</Button>
    </form>
  );
};
