import { LoginUser } from '@api/types/user';
import { atom } from 'recoil';

export const loginUserState = atom<LoginUser | undefined>({
  key: 'loginUserState',
  default: undefined,
});

export const isAuthenticatedState = atom<boolean>({
  key: 'isAuthenticatedState',
  default: false,
});
