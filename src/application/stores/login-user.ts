import { LoginUser } from '@api/types/user';
import { atom } from 'recoil';

export const loginUserState = atom<LoginUser>({
  key: 'loginUserState',
  default: {
    user: {
      id: -1,
      username: '',
      userID: '',
      profileImage: '',
    },
    isJoined: false,
    accessToken: '',
    refreshToken: '',
  },
});

export const authState = atom<boolean>({
  key: 'authState',
  default: false,
});
