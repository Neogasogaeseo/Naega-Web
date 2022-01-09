import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomeMyPage from '@pages/Home/MyPage';
import HomeTeam from '@pages/Home/Team';
import HomeNeoga from '@pages/Home/Neoga';

function HomeRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomeNeoga />} />
      <Route path="neoga" element={<HomeNeoga />} />
      <Route path="team" element={<HomeTeam />} />
      <Route path="mypage" element={<HomeMyPage />} />
    </Routes>
  );
}

export default HomeRouter;