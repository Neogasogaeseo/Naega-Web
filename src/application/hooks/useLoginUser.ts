import { useRecoilState } from 'recoil';

import { api } from '@api/index';
import { LoginUser } from '@api/types/user';
import { isAuthenticatedState, loginUserState } from '@stores/login-user';
import { INITIAL_LOGIN_USER, TOKEN_KEYS } from '@utils/constant';

export function useLoginUser() {
  const [loginUser, setLoginUser] = useRecoilState(loginUserState);
  const [isAuthenticated, setIsAuthenticated] = useRecoilState(isAuthenticatedState);

  const setAccessToken = (accessToken: string) => {
    localStorage.setItem(TOKEN_KEYS.ACCESS, accessToken);
    initLoginUser();
  };

  const setRefreshToken = (refreshToken: string) => {
    localStorage.setItem(TOKEN_KEYS.REFRESH, refreshToken);
    initLoginUser();
  };

  const removeToken = () => {
    localStorage.removeItem(TOKEN_KEYS.ACCESS);
    localStorage.removeItem(TOKEN_KEYS.REFRESH);
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
    }
  };

  return {
    ...loginUser.user,
    setAccessToken,
    setRefreshToken,
    removeToken,
    initLoginUser,
    saveLoginUser,
    isAuthenticated,
  };
}
