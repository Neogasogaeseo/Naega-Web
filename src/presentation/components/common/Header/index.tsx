import { useNavigate } from 'react-router-dom';

import { IcBell, IcSetting } from '@assets/icons';
import { ImgLogoHeader } from '@assets/images';
import { StCommonHeader, StLoginButton, StMypageButton, StNotification, StWrapper } from './style';
import { useLoginUser } from '@hooks/useLoginUser';
import { api } from '@api/index';
import { useQuery } from 'react-query';
import { useMemo } from 'react';
import { getGeneralLocationParams } from '@utils/etc';

type CommonHeaderProps = {
  isLogoOnly?: boolean;
};

export default function CommonHeader(props: CommonHeaderProps) {
  const { isLogoOnly = false } = props;
  const navigate = useNavigate();
  const { isAuthenticated, userID: loginUserNickname } = useLoginUser();
  const { data: isNotice } = useQuery('isNotice', () => api.headerService.getIsNotice());
  const pathes = getGeneralLocationParams();
  const userID = pathes[2] === 'mypage' ? pathes[3] : undefined;

  const mypageState = useMemo(
    () =>
      userID === undefined
        ? undefined
        : userID === loginUserNickname
        ? 'MINE'
        : isAuthenticated
        ? 'OTHER'
        : 'NOT_AUTHENTICATED',
    [userID, isAuthenticated, loginUserNickname],
  );

  const getMypageLink = () => {
    switch (mypageState) {
      case 'OTHER':
        return `/home/mypage/${loginUserNickname}`;
      default:
        return '/login';
    }
  };

  const shouldShowUserButtons = useMemo(
    () => !isLogoOnly && (mypageState === undefined || mypageState === 'MINE') && isAuthenticated,
    [mypageState, isAuthenticated, isLogoOnly],
  );
  const shouldShowLoginButtons = useMemo(
    () => !isLogoOnly && (mypageState === undefined || mypageState === 'MINE') && !isAuthenticated,
    [mypageState, isAuthenticated, isLogoOnly],
  );
  const shouldShowMypageButtons = useMemo(
    () => !isLogoOnly && mypageState !== undefined && mypageState !== 'MINE',
    [mypageState, isLogoOnly],
  );

  return (
    <StCommonHeader>
      <div>
        <ImgLogoHeader
          onClick={() => {
            navigate('/home');
          }}
        />
        {shouldShowUserButtons && (
          <>
            <StWrapper>
              <IcSetting />
              <IcBell onClick={() => navigate('/team/alert')} />
            </StWrapper>
            {isNotice && <StNotification />}
          </>
        )}
        {shouldShowLoginButtons && (
          <StLoginButton
            onClick={() => {
              navigate(`/login`);
            }}
          >
            로그인
          </StLoginButton>
        )}
        {shouldShowMypageButtons && (
          <StMypageButton onClick={() => navigate(getMypageLink())}>내 My 공유하기</StMypageButton>
        )}
      </div>
    </StCommonHeader>
  );
}
