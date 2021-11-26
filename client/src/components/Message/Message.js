import { useRef, useState, useEffect } from 'react';
import { format } from 'date-fns';

import './Message.css';

export const Message = ({ username, timestamp, text, usersMessage }) => {
  const textareaRef = useRef(null);
  const formattedTimestamp = format(timestamp, 'dd.MM, HH:mm');
  const [height, setHeight] = useState(20);

  useEffect(() => {
    if (textareaRef.current) {
      setHeight(textareaRef.current.scrollHeight);
    }
  }, [textareaRef]);

  return (
    <li className={`Message ${usersMessage ? 'Message_you' : ''}`}>
      <header className="Message__header">
        <p className="Message__author">{username}</p>
        <p className="Message__timestamp">{formattedTimestamp}</p>
      </header>
      <textarea
        className="Message__text"
        readOnly
        value={text}
        style={{ height: `${height + 1}px` }} // +1 is just in case, some browsers showed scroll...
        ref={textareaRef}
      />
    </li>
  );
};
