import { LoginUserService } from '@api/login-user';
import { LOGIN_USER_DATA } from './login-user.data';

export function loginUserMock(): LoginUserService {
  const getUserInfo = async () => {
    await wait(2000);
    return LOGIN_USER_DATA._;
  };
  const postLogin = async () => {
    await wait(2000);
    return {
      isJoined: true,
      accessToken: '',
      refreshToken: '',
      user: {
        id: 1,
        username: '',
        userID: '',
        profileImage: '',
      },
    };
  };
  return { getUserInfo, postLogin };
}

const wait = (milliSeconds: number) => new Promise((resolve) => setTimeout(resolve, milliSeconds));
