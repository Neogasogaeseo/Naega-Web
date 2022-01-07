import { BrowserRouter, Routes } from 'react-router-dom';
import UserRouter from './UserRouter';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <UserRouter />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
