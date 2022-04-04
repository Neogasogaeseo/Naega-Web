import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { useLoginUser } from '@hooks/useLoginUser';
import CommonHeader from '../Header';
import { StHomeHeader, StNavLink, StNavBottomLine } from './style';

function HomeHeader() {
  const location = useLocation();
  const { userID } = useLoginUser();
  const [currentTab, setCurrentTab] = useState(location.pathname.split('/')[1]);
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);

  const tabList = [
    { name: '너가소개서', href: 'neoga' },
    { name: '팀원소개서', href: 'team' },
    { name: 'MY', href: `mypage/${userID}` },
  ];

  useEffect(() => {
    if (!location) return;
    const selectedTab = location.pathname.split('/')[2];
    setCurrentTab(selectedTab ?? 'neoga');
  }, [location]);

  /*
    1. mypage에 들어있고 userID가 나랑 같으면 -> 보임
    2. mypage 외에 들어있고 userID가 존재하면 -> 보임
    3. 그 외의 경우 -> 안 보임
  */

  useEffect(() => {
    if (currentTab === 'mypage') {
      setIsHeaderVisible(location.pathname.split('/')[3] === userID);
    } else setIsHeaderVisible(userID !== '');
  }, [currentTab, userID]);

  return (
    <StHomeHeader>
      <CommonHeader />
      {isHeaderVisible && (
        <>
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
        </>
      )}
    </StHomeHeader>
  );
}

export default HomeHeader;
