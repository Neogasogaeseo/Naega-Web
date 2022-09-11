import { LoginUser } from '@api/types/user';
import { atom } from 'recoil';

export const loginUserState = atom<LoginUser>({
  key: 'loginUserState',
  default: {
    isJoined: false,
    accessToken: '',
    refreshToken: '',
    user: { id: -1, userID: '', username: '', profileImage: '' },
  },
});

export const isAuthenticatedState = atom<boolean>({
  key: 'isAuthenticatedState',
  default: false,
});
