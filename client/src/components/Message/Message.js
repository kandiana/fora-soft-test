import './Message.css';

export const Message = ({ username, timestamp, text }) => {
  return (
    <li className="Message">
      <header className="Message__header">
        <p className="Message__author">{username}</p>
        <p className="Message__timestamp">{timestamp}</p>
      </header>
      <p className="Message__text">{text}</p>
    </li>
  );
};
