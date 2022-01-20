import { Route, Routes } from 'react-router-dom';
import Landing from '@pages/Landing';
import Login from '@pages/Login';
import Join from '@pages/Join';
import OAuthRedirectHandler from '@pages/OAuthRedirectHandler';
import Home from '@pages/Home';
import JoinComplete from '@pages/JoinComplete';

const LoginRouter = () => (
  <Routes>
    <Route path="/" element={<Landing />} />
    <Route path="/login" element={<Login />} />
    <Route path="/join" element={<Join />} />
    <Route path="/join/complete" element={<JoinComplete />} />
    <Route path="/home/*" element={<Home />} />

    <Route path="/auth/kakao/callback" element={<OAuthRedirectHandler />} />
  </Routes>
);

export default LoginRouter;
