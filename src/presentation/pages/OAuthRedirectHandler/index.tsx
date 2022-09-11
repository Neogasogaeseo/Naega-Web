import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';

import { useLoginUser } from '@hooks/useLoginUser';
import { api } from '@api/index';

const OAuthRedirectHandler = () => {
  const navigate = useNavigate();
  const { saveLoginUser } = useLoginUser();
  const [authorizationCode, setAuthorizationCode] = useState<string>('');

  const { mutate: login } = useMutation(() => api.loginUserService.postLogin(authorizationCode), {
    useErrorBoundary: true,
    onSuccess: (data) => {
      saveLoginUser(data);
      if (data.isJoined) navigate('/home');
      else navigate('/join');
    },
  });

  useEffect(
    () => setAuthorizationCode(new URL(window.location.href).searchParams.get('code') ?? ''),
    [],
  );

  useEffect(() => {
    if (authorizationCode.length) login();
  }, [authorizationCode]);

  return <></>;
};

export default OAuthRedirectHandler;
