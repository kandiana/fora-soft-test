import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getOldMessages } from '../../store/thunks/messages';
import { getUsersOnline } from '../../store/thunks/usersOnline';

import { ChatInput } from '../../components/ChatInput/ChatInput';
import { MessagesList } from '../../components/MessagesList/MessagesList';
import { UsersList } from '../../components/UsersList/UsersList';

import './ChatPage.css';

export const ChatPage = ({ room }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOldMessages(room));
    dispatch(getUsersOnline(room));
  }, [dispatch, room]);

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
