import { api } from '@api/index';
import { errorState } from '@stores/error';
import { authState, loginUserState } from '@stores/login-user';
import { useRecoilState } from 'recoil';

export function useLoginUser() {
  const [loginUser, setLoginUser] = useRecoilState(loginUserState);
  const [isAuthenticated, setIsAuthenticated] = useRecoilState(authState);
  const [error, setError] = useRecoilState(errorState);

  const setAccessToken = (token: string) => {
    localStorage.setItem('token', token);
    initLoginUser();
  };

  const removeAccessToken = () => {
    localStorage.removeItem('token');
    setLoginUser({ accessToken: '', username: '', userID: '', profileImage: '' });
  };

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
