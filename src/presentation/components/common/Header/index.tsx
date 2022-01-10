import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { StHeaderWrapper } from './style';
import { imgLogo } from '@assets/images';

function Header() {
  const location = useLocation();
  const pathName = location.pathname;
  const [currentTab, setCurrentTab] = useState(pathName);

  const tabList = [
    { name: '너가소개서', href: '/home/you' },
    { name: '팀원소개서', href: '/home/team' },
    { name: 'MY', href: '/home/mypage' },
  ];

  return (
    <StHeaderWrapper>
      <Link to="/home/you">
        <img src={imgLogo} />
      </Link>
      <div>
        {tabList.map((tab) => (
          <NavLink
            key={tab.name}
            to={tab.href}
            onClick={() => setCurrentTab(tab.href)}
            className={currentTab === tab.href ? 'current' : ''}
          >
            {tab.name}
          </NavLink>
        ))}
      </div>
    </StHeaderWrapper>
  );
}

export default Header;
