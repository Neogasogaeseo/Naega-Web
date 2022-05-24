import { useNavigate } from 'react-router-dom';

import { IcBell, IcSetting } from '@assets/icons';
import { ImgLogoHeader } from '@assets/images';
import { StCommonHeader, StLoginButton, StMypageButton, StNotification, StWrapper } from './style';
import { useLoginUser } from '@hooks/useLoginUser';
import { api } from '@api/index';
import { useQuery } from 'react-query';
import { useMemo } from 'react';

type CommonHeaderProps = {
  isLogoOnly?: boolean;
  mypageState?: undefined | 'MINE' | 'OTHER';
};

export default function CommonHeader(props: CommonHeaderProps) {
  const { isLogoOnly = false, mypageState } = props;
  const navigate = useNavigate();
  const { isAuthenticated, userID: loginUserNickname } = useLoginUser();
  const { data: isNotice } = useQuery('isNotice', () => api.headerService.getIsNotice(), {
    enabled: isAuthenticated,
  });

  const getMypageLink = () => (isAuthenticated ? `/home/mypage/${loginUserNickname}` : '/login');
  const getHomeLink = () => (isAuthenticated ? '/home' : '/login');

  const shouldShowUserButtons = useMemo(
    () => !isLogoOnly && [undefined, 'MINE'].includes(mypageState) && isAuthenticated,
    [mypageState, isAuthenticated, isLogoOnly],
  );
  const shouldShowLoginButton = useMemo(
    () => !isLogoOnly && [undefined, 'MINE'].includes(mypageState) && !isAuthenticated,
    [mypageState, isAuthenticated, isLogoOnly],
  );
  const shouldShowMypageButton = useMemo(
    () => !isLogoOnly && ![undefined, 'MINE'].includes(mypageState),
    [mypageState, isLogoOnly],
  );

  return (
    <StCommonHeader>
      <div>
        <ImgLogoHeader onClick={() => navigate(getHomeLink())} />
        {shouldShowUserButtons && (
          <>
            <StWrapper>
              <IcSetting onClick={() => navigate('/preferences')} />
              <IcBell onClick={() => navigate('/team/alert')} />
            </StWrapper>
            {isNotice && <StNotification />}
          </>
        )}
        {shouldShowLoginButton && (
          <StLoginButton
            onClick={() => {
              navigate(`/login`);
            }}
          >
            로그인
          </StLoginButton>
        )}
        {shouldShowMypageButton && (
          <StMypageButton onClick={() => navigate(getMypageLink())}>내 My 공유하기</StMypageButton>
        )}
      </div>
    </StCommonHeader>
  );
}
