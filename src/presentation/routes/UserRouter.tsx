import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
const Login = lazy(() => import('@pages/Login'));
const Join = lazy(() => import('@pages/Join'));
const OAuthRedirectHandler = lazy(() => import('@pages/OAuthRedirectHandler'));
const Home = lazy(() => import('@pages/Home'));
const JoinComplete = lazy(() => import('@pages/JoinComplete'));
const MyKeyword = lazy(() => import('@pages/Home/MyPage/Keyword'));
const MyNeogaPick = lazy(() => import('@pages/Home/MyPage/NeogaPick'));
const MyTeamPick = lazy(() => import('@pages/Home/MyPage/TeamPick'));
const Landing = lazy(() => import('@pages/Landing'));
import PublicRoute from './common/PublicRoute';

const UserRouter = () => (
  <Routes>
    <Route path="/" element={<PublicRoute />}>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/join" element={<Join />} />
      <Route path="/join/complete" element={<JoinComplete />} />
      <Route path="/mypage/keyword/:userID" element={<MyKeyword />} />
      <Route path="/mypage/neoga/:userID" element={<MyNeogaPick />} />
      <Route path="/mypage/team/:userID" element={<MyTeamPick />} />
      <Route path="/home/*" element={<Home />} />
      <Route path="/auth/kakao/callback" element={<OAuthRedirectHandler />} />
    </Route>
  </Routes>
);

export default UserRouter;
