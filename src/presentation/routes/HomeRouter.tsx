import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomeMyPage from '@pages/Home/MyPage';
import HomeTeam from '@pages/Home/Team';
import HomeYou from '@pages/Home/You';

function HomeRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomeYou />} />
      <Route path="you" element={<HomeYou />} />
      <Route path="team" element={<HomeTeam />} />
      <Route path="mypage" element={<HomeMyPage />} />
    </Routes>
  );
}

export default HomeRouter;
