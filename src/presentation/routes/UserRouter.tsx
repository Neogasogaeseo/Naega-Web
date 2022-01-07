import { Route, Routes } from 'react-router-dom';
import Login from '@pages/Login';
import Join from '@pages/Join';
import Home from '@pages/Home';

const LoginRouter = () => (
  <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/join" element={<Join />} />
    <Route path="/home/*" element={<Home />} />
  </Routes>
);

export default LoginRouter;
