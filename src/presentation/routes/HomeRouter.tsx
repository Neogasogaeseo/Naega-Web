import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
const HomeMyPage = lazy(() => import('@pages/Home/MyPage'));
const HomeTeam = lazy(() => import('@pages/Home/Team'));
const HomeNeoga = lazy(() => import('@pages/Home/Neoga'));
const PrivateRoute = lazy(() => import('./common/PrivateRoute'));
import PublicRoute from './common/PublicRoute';

function HomeRouter() {
  return (
    <Routes>
      <Route path="/" element={<PrivateRoute />}>
        <Route path="/" element={<HomeNeoga />} />
        <Route path="neoga" element={<HomeNeoga />} />
        <Route path="team" element={<HomeTeam />} />
      </Route>
      <Route path="/" element={<PublicRoute />}>
        <Route path="mypage/:userID" element={<HomeMyPage />} />
      </Route>
    </Routes>
  );
}

export default HomeRouter;
