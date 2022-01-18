export const CLIENT_ID = `${process.env.REACT_APP_CLIENT_ID}`;
export const REDIRECT_URI = 'http://localhost:3000/auth/kakao/callback';

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;