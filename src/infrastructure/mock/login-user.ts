import { LoginUserService } from '@api/login-user';
import { LOGIN_USER_DATA } from './login-user.data';

export function loginUserMock(): LoginUserService {
  const getUserInfo = async () => {
    await wait(2000);
    return LOGIN_USER_DATA._;
  };
  return { getUserInfo };
}

const wait = (milliSeconds: number) => new Promise((resolve) => setTimeout(resolve, milliSeconds));
