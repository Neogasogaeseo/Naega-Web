import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NeogaRouter from './NeogaRouter';
import TeamRouter from './TeamRouter';
import UserRouter from './UserRouter';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<UserRouter />} />
        <Route path="/team/*" element={<TeamRouter />} />
        <Route path="/neoga/*" element={<NeogaRouter />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
