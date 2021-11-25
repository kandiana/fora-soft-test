import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { StartPage } from './pages/StartPage/StartPage';
import { ChatPage } from './pages/ChatPage/ChatPage';

import './App.css';

function App() {
  const user = useSelector((state) => state.user);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/:room"
          element={user.name ? <ChatPage room={user.room} /> : <StartPage />}
        />
        <Route path="/" element={<StartPage />} />
      </Routes>
    </div>
  );
}

export default App;
