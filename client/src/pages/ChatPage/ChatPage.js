import { ChatInput } from '../../components/ChatInput/ChatInput';
import { MessagesList } from '../../components/MessagesList/MessagesList';
import { UsersList } from '../../components/UsersList/UsersList';
import './ChatPage.css';

export const ChatPage = () => {
  return (
    <div className="ChatPage">
      <UsersList />
      <div className="ChatPage__messages">
        <MessagesList />
        <ChatInput />
      </div>
    </div>
  );
};
