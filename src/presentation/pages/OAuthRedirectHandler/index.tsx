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
        saveLoginUser(data);
        if (data.isJoined) navigate('/home');
        else navigate('/join');
      },
    },
  );

  useEffect(() => {
    const authorizationCode = new URL(window.location.href).searchParams.get('code') ?? '';
    if (authorizationCode.length) login(authorizationCode);
  }, []);

  return <></>;
};

export default OAuthRedirectHandler;
