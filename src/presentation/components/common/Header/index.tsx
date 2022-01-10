import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { StHeaderWrapper, StNavLink } from './style';
import { imgLogo } from '@assets/images';

function HomeHeader() {
  const location = useLocation();
  const pathName = location.pathname;
  const [currentTab, setCurrentTab] = useState(pathName);

  const tabList = [
    { name: '너가소개서', href: '/home/you' },
    { name: '팀원소개서', href: '/home/team' },
    { name: 'MY', href: '/home/mypage' },
  ];

  useEffect(() => {
    setCurrentTab(pathName);
  }, [location]);

  return (
    <StHeaderWrapper>
      <Link to="/home/you">
        <img src={imgLogo} />
      </Link>
      <div>
        {tabList.map((tab) => (
          <StNavLink
            key={tab.name}
            to={tab.href}
            onClick={() => setCurrentTab(tab.href)}
            current={currentTab === tab.href ? 'current' : ''}
          >
            {tab.name}
          </StNavLink>
        ))}
      </div>
    </StHeaderWrapper>
  );
}

export default HomeHeader;
