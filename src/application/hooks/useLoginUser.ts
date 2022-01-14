import { api } from '@api/index';
import { loginUserState } from '@stores/login-user';
import { useState } from 'react';
import { useRecoilState } from 'recoil';

export function useLoginUser() {
  const [loginUser, setLoginUser] = useRecoilState(loginUserState);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState<unknown>(null);

  const setAccessToken = (token: string) =>
    setLoginUser((prev) => ({ ...prev, accessToken: token }));

  const removeAccessToken = () => setLoginUser((prev) => ({ ...prev, accessToken: '' }));

  const initLoginUser = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) throw '토큰이 없습니다';
      const user = await api.userService.getUserInfo(token);
      setLoginUser(user);
      setIsAuthenticated(true);
      localStorage.setItem('token', user.accessToken);
    } catch (error) {
      setError(error);
    }
  };

  return {
    ...loginUser,
    setAccessToken,
    removeAccessToken,
    initLoginUser,
    isAuthenticated,
    isLoading: !error && !isAuthenticated,
    error: error,
  };
}
