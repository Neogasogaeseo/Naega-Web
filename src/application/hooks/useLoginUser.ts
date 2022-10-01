import { useRecoilState } from 'recoil';

import { api } from '@api/index';
import { LoginUser } from '@api/types/user';
import { errorState } from '@stores/error';
import { isAuthenticatedState, loginUserState } from '@stores/login-user';
import { INITIAL_LOGIN_USER, TOKEN_KEYS } from '@utils/constant';
import { UnauthorizedError } from '@api/types/errors';

export function useLoginUser() {
  const [loginUser, setLoginUser] = useRecoilState(loginUserState);
  const [isAuthenticated, setIsAuthenticatedOrigin] = useRecoilState(isAuthenticatedState);
  const [error, setError] = useRecoilState(errorState);

  const setAccessToken = (accessToken: string) => {
    localStorage.setItem(TOKEN_KEYS.ACCESS, accessToken);
    initLoginUser();
  };

  const setRefreshToken = (refreshToken: string) => {
    localStorage.setItem(TOKEN_KEYS.REFRESH, refreshToken);
    initLoginUser();
  };

  const removeAccessToken = () => {
    localStorage.removeItem(TOKEN_KEYS.ACCESS);
    setIsAuthenticated(false);
    setLoginUser(INITIAL_LOGIN_USER);
  };

  const saveLoginUser = (loginUser: LoginUser) => {
    setLoginUser(loginUser);
    setIsAuthenticated(true);
    localStorage.setItem(TOKEN_KEYS.ACCESS, loginUser.accessToken);
    localStorage.setItem(TOKEN_KEYS.REFRESH, loginUser.refreshToken);
  };

  const initLoginUser = async () => {
    try {
      const accessToken = localStorage.getItem(TOKEN_KEYS.ACCESS);
      const refreshToken = localStorage.getItem(TOKEN_KEYS.REFRESH);
      if (accessToken && refreshToken) {
        const user = await api.loginUserService.getUserInfo(accessToken);
        if (user.userID && user.username && user.profileImage) {
          saveLoginUser({
            isJoined: true,
            accessToken: accessToken,
            refreshToken: refreshToken,
            user: user,
          });
        }
      } else throw new UnauthorizedError('토큰이 없습니다');
    } catch (error) {
      setError(error);
    }
  };

  const setIsAuthenticated = (isAuthenticated: boolean) =>
    setIsAuthenticatedOrigin(isAuthenticated);

  return {
    ...loginUser.user,
    loginUser,
    setAccessToken,
    setRefreshToken,
    removeAccessToken,
    initLoginUser,
    saveLoginUser,
    isAuthenticated,
    setIsAuthenticated,
    isLoading: !error && !isAuthenticated,
    error: error,
  };
}
