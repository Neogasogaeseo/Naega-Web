import { api } from '@api/index';
import { LoginUser } from '@api/types/user';
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
    setIsAuthenticated(false);
    setLoginUser({ id: -1, accessToken: '', username: '', userID: '', profileImage: '' });
  };

  const saveLoginUser = (loginUser: LoginUser) => {
    setLoginUser(loginUser);
    setIsAuthenticated(true);
    localStorage.setItem('token', loginUser.accessToken);
  };

  const initLoginUser = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) throw '토큰이 없습니다';
      const user = await api.loginUserService.getUserInfo(token);
      saveLoginUser(user);
    } catch (error) {
      setError(error);
    }
  };

  return {
    ...loginUser,
    setAccessToken,
    removeAccessToken,
    initLoginUser,
    saveLoginUser,
    isAuthenticated,
    isLoading: !error && !isAuthenticated,
    error: error,
  };
}
