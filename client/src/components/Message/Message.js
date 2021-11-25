import { format } from 'date-fns';

import './Message.css';

export const Message = ({ username, timestamp, text }) => {
  const formattedTimestamp = format(timestamp, 'dd.MM, HH:mm');

  return (
    <li className="Message">
      <header className="Message__header">
        <p className="Message__author">{username}</p>
        <p className="Message__timestamp">{formattedTimestamp}</p>
      </header>
      <p className="Message__text">{text}</p>
    </li>
  );
};
