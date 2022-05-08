import { useEffect, useState } from 'react';

import { useLoginUser } from '@hooks/useLoginUser';
import CommonHeader from '../Header';
import { StHomeHeader, StNavLink, StNavBottomLine } from './style';
import { useMemo } from 'react';
import { getGeneralLocationParams } from '@utils/etc';

function HomeHeader() {
  const paths = getGeneralLocationParams();
  const { isAuthenticated, userID: loginUserNickname } = useLoginUser();
  const [currentTab, setCurrentTab] = useState(paths[2]);
  const userID = currentTab === 'mypage' ? paths[3] : undefined;

  const tabList = [
    { name: '너가소개서', href: 'neoga' },
    { name: '팀원소개서', href: 'team' },
    { name: 'MY', href: `mypage/${loginUserNickname}` },
  ];

  const mypageState = useMemo(
    () => (userID === undefined ? undefined : userID === loginUserNickname ? 'MINE' : 'OTHER'),
    [userID, isAuthenticated, loginUserNickname],
  );

  const shouldShowTab = useMemo(
    () => !(currentTab === 'mypage' && mypageState !== 'MINE'),
    [currentTab, mypageState],
  );

  useEffect(() => {
    const selectedTab = paths[2];
    setCurrentTab(selectedTab ?? 'neoga');
  }, [paths]);

  return (
    <StHomeHeader>
      <CommonHeader mypageState={mypageState} />
      {shouldShowTab && (
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
