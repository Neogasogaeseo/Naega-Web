import { useNavigate } from 'react-router-dom';

import { IcBell, IcSetting } from '@assets/icons';
import { ImgLogoHeader } from '@assets/images';
import { StCommonHeader, StLoginButton, StNotification, StWrapper } from './style';
import { useLoginUser } from '@hooks/useLoginUser';

export default function CommonHeader() {
  const navigate = useNavigate();
  const { isAuthenticated } = useLoginUser();
  return (
    <StCommonHeader>
      <div>
        <ImgLogoHeader
          onClick={() => {
            navigate('/home');
          }}
        />
        {isAuthenticated ? (
          <>
            <StWrapper>
              <IcSetting />
              <IcBell />
            </StWrapper>
            <StNotification />
          </>
        ) : (
          <StLoginButton
            onClick={() => {
              navigate(`/login`);
            }}
          >
            로그인
          </StLoginButton>
        )}
      </div>
    </StCommonHeader>
  );
}
