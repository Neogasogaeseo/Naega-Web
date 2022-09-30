import { useRecoilState } from 'recoil';

import { api } from '@api/index';
import { LoginUser } from '@api/types/user';
import { errorState } from '@stores/error';
import { isAuthenticatedState, loginUserState } from '@stores/login-user';
import { INITIAL_LOGIN_USER, TOKEN_KEYS } from '@utils/constant';
import { UnauthorizedError } from '@api/types/errors';

export function useLoginUser() {
  const [loginUser, setLoginUser] = useRecoilState(loginUserState);
  const [isAuthenticated, setIsAuthenticated] = useRecoilState(isAuthenticatedState);
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
    console.log('saveLoginUser 1', loginUser);
    setLoginUser(loginUser);
    console.log('saveLoginUser 2', loginUser);
    setIsAuthenticated(true);
    console.log('saveLoginUser 3', loginUser);
    localStorage.setItem(TOKEN_KEYS.ACCESS, loginUser.accessToken);
    console.log('saveLoginUser 4', loginUser);
    localStorage.setItem(TOKEN_KEYS.REFRESH, loginUser.refreshToken);
    console.log('saveLoginUser 5', loginUser);
  };

  const initLoginUser = async () => {
    console.log('initLoginUser 1');
    try {
      const accessToken = localStorage.getItem(TOKEN_KEYS.ACCESS);
      const refreshToken = localStorage.getItem(TOKEN_KEYS.REFRESH);
      console.log('initLoginUser 2', accessToken, refreshToken);
      if (accessToken && refreshToken) {
        console.log('initLoginUser 3', accessToken, refreshToken);
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
      console.log('>>>>>알 수 없는 에러', error);
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
