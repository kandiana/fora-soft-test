import { useNavigate } from 'react-router-dom';

import { Input } from '../../components/Input/Input';
import { Button } from '../../components/Button/Button';

import './StartPage.css';

export const StartPage = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate('/chatroom');
  };

  return (
    <form className="StartPage" onSubmit={handleSubmit}>
      <Input
        id="username"
        name="username"
        placeholder="Your username"
        required={true}
      />
      <Button>Join chat room</Button>
    </form>
  );
};
