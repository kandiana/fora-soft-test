import { useRef, useState, useEffect } from 'react';

import { format } from 'date-fns';

import './Message.css';

export const Message = ({ username, timestamp, text, toRight }) => {
  const textareaRef = useRef(null);
  const formattedTimestamp = format(timestamp, 'dd.MM, HH:mm');
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (textareaRef.current) {
      setHeight(textareaRef.current.scrollHeight + 'px');
    }
  }, [textareaRef]);

  return (
    <li className={`Message ${toRight ? 'Message_right' : ''}`}>
      <header className="Message__header">
        <p className="Message__author">{username}</p>
        <p className="Message__timestamp">{formattedTimestamp}</p>
      </header>
      <textarea
        className="Message__text"
        readOnly
        value={text}
        style={{ height: height }}
        ref={textareaRef}
      />
    </li>
  );
};
