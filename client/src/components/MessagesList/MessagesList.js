import { Message } from '../Message/Message';

import './MessagesList.css';

export const MessagesList = () => {
  const messages = [
    {
      username: 'user1',
      timestamp: Date.now().toLocaleString,
      text: 'Lorem ispum dolor',
    },
    {
      username: 'user2',
      timestamp: Date.now().toLocaleString,
      text: 'Lorem ispum dolor',
    },
    {
      username: 'user1',
      timestamp: Date.now().toLocaleString,
      text: 'Lorem ispum dolor',
    },
    {
      username: 'user3',
      timestamp: Date.now().toLocaleString,
      text: 'Lorem ispum dolor',
    },
    {
      username: 'user1',
      timestamp: Date.now().toLocaleString,
      text: 'Lorem ispum dolor',
    },
    {
      username: 'user2',
      timestamp: Date.now().toLocaleString,
      text: 'Lorem ispum dolor',
    },
    {
      username: 'user1',
      timestamp: Date.now().toLocaleString,
      text: 'Lorem ispum dolor',
    },
    {
      username: 'user3',
      timestamp: Date.now().toLocaleString,
      text: 'Lorem ispum dolor',
    },
    {
      username: 'user1',
      timestamp: Date.now().toLocaleString,
      text: 'Lorem ispum dolor',
    },
    {
      username: 'user2',
      timestamp: Date.now().toLocaleString,
      text: 'Lorem ispum dolor',
    },
    {
      username: 'user1',
      timestamp: Date.now().toLocaleString,
      text: 'Lorem ispum dolor',
    },
    {
      username: 'user3',
      timestamp: Date.now().toLocaleString,
      text: 'Lorem ispum dolor',
    },
  ];

  return (
    <ul className="MessagesList">
      {messages.map((message, i) => (
        <Message
          key={`${i}_${message.username}_${message.timestamp}`}
          username={message.username}
          date={message.timestamp}
          text={message.text}
        />
      ))}
    </ul>
  );
};
