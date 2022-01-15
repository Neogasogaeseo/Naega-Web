import { LoginUser } from '@api/types/user';
import { atom } from 'recoil';

export const loginUserState = atom<LoginUser>({
  key: 'loginUserState',
  default: {
    accessToken: '',
    username: '',
    userID: '',
    profileImage: '',
  },
});

export const authState = atom<boolean>({
  key: 'authState',
  default: false,
});
