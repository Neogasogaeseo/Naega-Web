import { atom } from 'recoil';

export const kakaoAuthTokenState = atom<string>({
    key: 'kakaoAuthTokenState',
    default: '',
  });

export const kakaoAccessToken = atom<string>({
  key: 'kakaoAccessToken',
  default: '',
});
  
export const kakaoRefreshToken = atom<string>({
  key: 'kakaoRefreshToken',
  default: '',
});