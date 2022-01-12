import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { StHomeHeader, StNavLink, StNavBottomLine } from './style';
import { imgLogo } from '@assets/images';

function HomeHeader() {
  const location = useLocation();
  const pathName = location.pathname;
  const [currentTab, setCurrentTab] = useState(pathName);

  const tabList = [
    { name: '너가소개서', href: '/home/neoga' },
    { name: '팀원소개서', href: '/home/team' },
    { name: 'MY', href: '/home/mypage' },
  ];

  useEffect(() => {
    setCurrentTab(pathName === '/home' ? '/home/neoga' : pathName);
  }, [location]);

  return (
    <StHomeHeader>
      <Link to="/home/you">
        <img src={imgLogo} />
      </Link>
      <div>
        {tabList.map((tab) => (
          <StNavLink
            key={tab.name}
            to={tab.href}
            current={currentTab === tab.href ? 'current' : ''}
          >
            {tab.name}
          </StNavLink>
        ))}
      </div>
      <StNavBottomLine />
    </StHomeHeader>
  );
}

export default HomeHeader;
