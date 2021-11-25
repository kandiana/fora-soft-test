import { useSelector } from 'react-redux';

import { Message } from '../Message/Message';

import './MessagesList.css';

export const MessagesList = () => {
  const messages = useSelector((state) => state.messages);
  const user = useSelector((state) => state.user);

  return (
    <ul className="MessagesList">
      {messages.map((message, i) => (
        <Message
          key={`${i}_${message.username}_${message.timestamp}`}
          username={message.username}
          timestamp={message.timestamp}
          text={message.text}
          toRight={message.id === user.id}
        />
      ))}
    </ul>
  );
};
