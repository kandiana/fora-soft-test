import { Button } from '../Button/Button';

import './ChatInput.css';

export const ChatInput = () => {
  return (
    <form className="ChatInput">
      <textarea className="ChatInput__input" id="message" name="message" />
      <Button>Send</Button>
    </form>
  );
};
