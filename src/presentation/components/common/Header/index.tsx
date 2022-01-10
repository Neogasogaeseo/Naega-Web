import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { StHeaderWrapper } from './style';
import { COLOR } from '@styles/common/color';
import { imgLogo } from '@assets/images';

function Header() {
  const location = useLocation();
  const pageName = location.pathname;

  const [prev, setPrev] = useState('');
  const [current, setCurrent] = useState(pageName);

  const handlePageClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!(e.target instanceof HTMLAnchorElement)) return;
    setCurrent(e.target.id);
  };

  useEffect(() => {
    if (current !== '') {
      const currentPage = document.getElementById(current);
      if (currentPage === null) return;
      currentPage.style.color = `${COLOR.GRAY_8}`;
      currentPage.style.borderBottom = `2px solid ${COLOR.GRAY_8}`;
    }
    if (prev !== '') {
      const prevPage = document.getElementById(prev);
      if (prevPage === null) return;
      prevPage.style.color = `${COLOR.GRAY_4}`;
      prevPage.style.borderBottom = `none`;
    }
    setPrev(current);
  }, [current]);

  return (
    <StHeaderWrapper>
      <img src={imgLogo} />
      <div>
        <NavLink to="you" onClick={handlePageClick} id="/home/you">
          너가소개서
        </NavLink>
        <NavLink to="team" onClick={handlePageClick} id="/home/team">
          팀원소개서
        </NavLink>
        <NavLink to="mypage" onClick={handlePageClick} id="/home/mypage">
          MY
        </NavLink>
      </div>
    </StHeaderWrapper>
  );
}

export default Header;
