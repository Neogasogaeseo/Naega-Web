import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';

import { useLoginUser } from '@hooks/useLoginUser';
import { api } from '@api/index';

const OAuthRedirectHandler = () => {
  const navigate = useNavigate();
  const { saveLoginUser } = useLoginUser();

  const { mutate: login } = useMutation(
    (authorizationCode: string) => api.loginUserService.postLogin(authorizationCode),
    {
      useErrorBoundary: true,
      onSuccess: (data) => {
        const loginUser = saveLoginUser(data);
        console.log('loginUser', loginUser.isJoined);
        alert(`onSuccess loginUser ${loginUser}`);
        if (loginUser.isJoined) navigate('/home');
        else navigate('/join');
      },
    },
  );

  useEffect(() => {
    const authorizationCode = new URL(window.location.href).searchParams.get('code') ?? '';
    if (authorizationCode.length) login(authorizationCode);
    else throw '카카오 인가 코드 조회 실패';
  }, []);

  return <></>;
};

export default OAuthRedirectHandler;
