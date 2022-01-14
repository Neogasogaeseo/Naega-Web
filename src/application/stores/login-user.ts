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
