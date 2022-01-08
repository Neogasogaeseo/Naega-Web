import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TeamRouter from './TeamRouter';
import UserRouter from './UserRouter';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<UserRouter />} />
        <Route path="/team/*" element={<TeamRouter />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
