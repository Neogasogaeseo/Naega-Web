import { useNavigate } from 'react-router-dom';

import { IcBell, IcSetting } from '@assets/icons';
import { ImgLogoHeader } from '@assets/images';
import { StCommonHeader, StLoginButton, StNotification, StWrapper } from './style';
import { useLoginUser } from '@hooks/useLoginUser';
import { api } from '@api/index';
import { useQuery } from 'react-query';

export default function CommonHeader() {
  const navigate = useNavigate();
  const { isAuthenticated } = useLoginUser();
  const { data: isNotice } = useQuery('isNotice', () => api.headerService.getIsNotice());
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
              <IcBell onClick={() => navigate('/team/alert')} />
            </StWrapper>
            {isNotice && <StNotification />}
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
