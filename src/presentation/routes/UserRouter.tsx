import { Route, Routes } from 'react-router-dom';
import Landing from '@pages/Landing';
import Login from '@pages/Login';
import Join from '@pages/Join';
import Home from '@pages/Home';
import JoinComplete from '@pages/JoinComplete';

const LoginRouter = () => (
  <Routes>
    <Route path="/" element={<Landing />} />
    <Route path="/login" element={<Login />} />
    <Route path="/join" element={<Join />} />
    <Route path="/joinComplete" element={<JoinComplete />} />
    <Route path="/home/*" element={<Home />} />
  </Routes>
);

export default LoginRouter;
