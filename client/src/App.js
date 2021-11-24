import { Routes, Route } from 'react-router-dom';
import { StartPage } from './pages/StartPage/StartPage';
import { ChatPage } from './pages/ChatPage/ChatPage';

import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/chatroom" element={<ChatPage />} />
        <Route path="/" element={<StartPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
