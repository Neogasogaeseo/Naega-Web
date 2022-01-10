const CLIENT_ID = 'd95111016d49b506a9bf9d5dbb1bac9e';
const REDIRECT_URI = 'http://localhost:3000/oauth';

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
