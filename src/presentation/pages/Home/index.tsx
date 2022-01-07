import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import HomeMyPage from './MyPage';
import HomeTeam from './Team';
import HomeYou from './You';

function Home() {
  return (
    <div>
      <div>마이페이지</div>
      <Link to="you">너가소개서</Link>
      <Link to="team">팀원소개서</Link>
      <Link to="mypage">MY</Link>
      <Routes>
        <Route path="you" element={<HomeYou />} />
        <Route path="team" element={<HomeTeam />} />
        <Route path="mypage" element={<HomeMyPage />} />
      </Routes>
    </div>
  );
}

export default Home;
