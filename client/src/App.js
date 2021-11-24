// import { Routes, Route } from 'react-router-dom';
import { StartPage } from './pages/StartPage/StartPage';
import { ChatPage } from './pages/ChatPage/ChatPage';

import './App.css';
import { useSelector } from 'react-redux';

function App() {
  const user = useSelector((state) => state.user);

  return (
    <div className="App">
      {user ? <ChatPage /> : <StartPage />}
      {/* <Routes>
        <Route path="/chatroom" element={<ChatPage />} />
        <Route path="/" element={<StartPage />}></Route>
      </Routes> */}
    </div>
  );
}

export default App;
