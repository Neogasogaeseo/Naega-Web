import { LoginUser } from '@api/types/user';
import { INITIAL_LOGIN_USER } from '@utils/constant';
import { atom } from 'recoil';

export const loginUserState = atom<LoginUser>({
  key: 'loginUserState',
  default: INITIAL_LOGIN_USER,
});

export const isAuthenticatedState = atom<boolean>({
  key: 'isAuthenticatedState',
  default: false,
});
