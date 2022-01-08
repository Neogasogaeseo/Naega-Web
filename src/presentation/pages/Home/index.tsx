import React from 'react';
import { Link } from 'react-router-dom';
import HomeRouter from '@routes/HomeRouter';

function Home() {
  return (
    <div>
      <div>홈</div>
      <Link to="you">너가소개서</Link>
      <Link to="team">팀원소개서</Link>
      <Link to="mypage">MY</Link>
      <HomeRouter />
    </div>
  );
}

export default Home;
