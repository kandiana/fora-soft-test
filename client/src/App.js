import { Routes, Route } from 'react-router-dom';
import { StartPage } from './pages/StartPage/StartPage';
import { ChatPage } from './pages/ChatPage/ChatPage';

import './App.css';
import { useSelector } from 'react-redux';

function App() {
  const user = useSelector((state) => state.user);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/:room"
          element={user.room ? <ChatPage room={user.room} /> : <StartPage />}
        />
        <Route path="/" element={<StartPage />} />
      </Routes>
    </div>
  );
}

export default App;
