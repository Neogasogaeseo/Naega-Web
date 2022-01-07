import { Route, Routes } from 'react-router-dom';
import Login from '@pages/Login';
import Join from '@pages/Join';

const LoginRouter = () => (
  <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/join" element={<Join />} />
  </Routes>
);

export default LoginRouter;
