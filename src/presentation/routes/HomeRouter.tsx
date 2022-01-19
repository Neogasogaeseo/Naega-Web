import { Route, Routes } from 'react-router-dom';
import HomeMyPage from '@pages/Home/MyPage';
import HomeTeam from '@pages/Home/Team';
import HomeNeoga from '@pages/Home/Neoga';
import PrivateRoute from './common/PrivateRoute';

function HomeRouter() {
  return (
    <Routes>
      <Route path="/" element={<PrivateRoute />}>
        <Route path="/" element={<HomeNeoga />} />
        <Route path="neoga" element={<HomeNeoga />} />
        <Route path="team" element={<HomeTeam />} />
      </Route>
      <Route path="mypage/:userID" element={<HomeMyPage />} />
    </Routes>
  );
}

export default HomeRouter;
