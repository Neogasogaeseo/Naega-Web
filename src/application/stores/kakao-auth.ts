import { atom } from 'recoil';

export const kakaoAuthTokenState = atom<string>({
    key: 'kakaoAuthTokenState',
    default: '',
  });
  