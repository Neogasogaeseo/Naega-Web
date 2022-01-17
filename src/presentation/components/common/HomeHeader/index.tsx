import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { StHomeHeader, StNavLink, StNavBottomLine } from './style';
import { imgLogo } from '@assets/images';
import { useLoginUser } from '@hooks/useLoginUser';

function HomeHeader() {
  const location = useLocation();
  const { userID } = useLoginUser();
  const [currentTab, setCurrentTab] = useState(location.pathname.split('/')[1]);

  const tabList = [
    { name: '너가소개서', href: 'neoga' },
    { name: '팀원소개서', href: 'team' },
    { name: 'MY', href: `mypage/${userID}` },
  ];

  useEffect(() => {
    setCurrentTab(location.pathname.split('/')[2]);
  }, [location]);

  return (
    <StHomeHeader>
      <Link to="/home/neoga">
        <img src={imgLogo} />
      </Link>
      <div>
        {tabList.map((tab) => (
          <StNavLink
            key={tab.name}
            to={`/home/${tab.href}`}
            selected={currentTab === tab.href.split('/')[0]}
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
