import { kakaoAccessTokenState, kakaoRefreshTokenState } from '@stores/kakao-auth';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { postLogin } from '@api/login-user';
import { useLoginUser } from '@hooks/useLoginUser';

const OAuthRedirectHandler = () => {
  const navigate = useNavigate();
  const { setAccessToken } = useLoginUser();
  const setKakaoAccessToken = useSetRecoilState(kakaoAccessTokenState);
  const setKakaoRefreshToken = useSetRecoilState(kakaoRefreshTokenState);

  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get('code') ?? ''; //인가코드
    postLogin(code).then((response) => {
      if (response.user) {
        setAccessToken(response.accesstoken);
        navigate('/home');
      } else {
        setKakaoAccessToken(response.accesstoken);
        setKakaoRefreshToken(response.refreshtoken);
        navigate('/join');
      }
    });
  }, []);

  return <></>;
};

export default OAuthRedirectHandler;
