import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import { messagesReducer } from './reducers/messages';
import { socketReducer } from './reducers/socket';
import { userReducer } from './reducers/user';
import { usersOnlineReducer } from './reducers/usersOnline';

const rootReducer = combineReducers({
  user: userReducer,
  socket: socketReducer,
  messages: messagesReducer,
  usersOnline: usersOnlineReducer,
});

const INITIAL_STATE = {
  user: {},
  socket: null,
  messages: [],
  usersOnline: {},
};

export const store = createStore(
  rootReducer,
  INITIAL_STATE,
  applyMiddleware(thunk)
);

// store.subscribe(() => {
//   console.log(store.getState());
// });
