import { LoginUser } from './types/user';
import { publicAPI } from '../remote/base';

export interface LoginUserService {
  getUserInfo(token: string): Promise<LoginUser>;
}

export const postLogin = async (
  authorizationCode: string,
): Promise<{ user?: any; accesstoken: string; refreshtoken?: string }> => {
  try {
    const response = await publicAPI.post({
      url: `/auth/login`,
      data: { authenticationCode: authorizationCode, provider: 'kakao' },
    });
    if (response.status === 200) return response.data;
    else throw '로그인 실패';
  } catch (error) {
    console.error(error);
    throw '로그인 실패';
  }
};

export const postJoin = async (joinData: FormData) => {
  try {
    const response = await publicAPI.post({
      url: `/auth/register`,
      data: joinData,
      type: 'multipart',
    });
    return response;
  } catch (e) {
    throw '회원가입 실패';
  }
};
