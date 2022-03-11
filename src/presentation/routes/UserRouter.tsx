import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
const Login = lazy(() => import('@pages/Login'));
const Join = lazy(() => import('@pages/Join'));
const OAuthRedirectHandler = lazy(() => import('@pages/OAuthRedirectHandler'));
const Home = lazy(() => import('@pages/Home'));
const JoinComplete = lazy(() => import('@pages/JoinComplete'));
const Landing = lazy(() => import('@pages/Landing'));
import PublicRoute from './common/PublicRoute';

const UserRouter = () => (
  <Routes>
    <Route path="/" element={<PublicRoute />}>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/join" element={<Join />} />
      <Route path="/join/complete" element={<JoinComplete />} />
      <Route path="/home/*" element={<Home />} />
      <Route path="/auth/kakao/callback" element={<OAuthRedirectHandler />} />
    </Route>
  </Routes>
);

export default UserRouter;
