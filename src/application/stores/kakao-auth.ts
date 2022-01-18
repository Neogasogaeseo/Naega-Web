import { atom } from 'recoil';

export const kakaoAccessTokenState = atom<string>({
  key: 'kakaoAccessTokenState',
  default: '',
});
  
export const kakaoRefreshTokenState = atom<string>({
  key: 'kakaoRefreshTokenState',
  default: '',
});