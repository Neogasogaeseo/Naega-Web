import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import { api } from '@api/index';
import { LoginUser } from '@api/types/user';
import { errorState } from '@stores/error';
import { isAuthenticatedState, loginUserState } from '@stores/login-user';
import { TOKEN } from '@utils/constant';

export function useLoginUser() {
  const [loginUser, setLoginUser] = useRecoilState(loginUserState);
  const [isAuthenticated, setIsAuthenticated] = useRecoilState(isAuthenticatedState);
  const [error, setError] = useRecoilState(errorState);
  const navigate = useNavigate();

  const setAccessToken = (accessToken: string) => {
    localStorage.setItem(TOKEN.ACCESS, accessToken);
    initLoginUser();
  };

  const setRefreshToken = (refreshToken: string) => {
    localStorage.setItem(TOKEN.REFRESH, refreshToken);
    initLoginUser();
  };

  const removeAccessToken = () => {
    localStorage.removeItem(TOKEN.ACCESS);
    setIsAuthenticated(false);
    setLoginUser({
      isJoined: false,
      accessToken: '',
      refreshToken: '',
      user: { id: -1, userID: '', username: '', profileImage: '' },
    });
  };

  const saveLoginUser = (loginUser: LoginUser) => {
    setLoginUser(loginUser);
    setIsAuthenticated(true);
    localStorage.setItem(TOKEN.ACCESS, loginUser.accessToken);
    localStorage.setItem(TOKEN.REFRESH, loginUser.refreshToken);
  };

  const initLoginUser = async () => {
    try {
      const accessToken = localStorage.getItem(TOKEN.ACCESS);
      const refreshToken = localStorage.getItem(TOKEN.REFRESH);
      if (accessToken && refreshToken) {
        const user = await api.loginUserService.getUserInfo(accessToken);
        if (user.userID && user.username && user.profileImage) {
          saveLoginUser({
            isJoined: true,
            accessToken: accessToken,
            refreshToken: refreshToken,
            user: user,
          });
        } else {
          navigate('/join');
        }
      } else throw '토큰이 없습니다';
    } catch (error) {
      setError(error);
    }
  };

  return {
    ...loginUser.user,
    setAccessToken,
    setRefreshToken,
    removeAccessToken,
    initLoginUser,
    saveLoginUser,
    isAuthenticated,
    isLoading: !error && !isAuthenticated,
    error: error,
  };
}
