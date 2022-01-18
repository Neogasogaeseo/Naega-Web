import { LoginUser } from './types/user';
import { publicAPI } from '../remote/base';

export interface LoginUserService {
  getUserInfo(token: string): Promise<LoginUser>;
}

export const postLogin = async (kakaoToken:string) : Promise<{user?:object;accesstoken:string;refreshtoken:string}> => {
  try{
    const response = await publicAPI.post({url:`/auth/login`,data:{authenticationCode:kakaoToken, provider:'kakao'} })
    console.log(response);
    if(response.status===200) return response.data
    else throw '로그인 실패';
  }catch (e){
    console.error(e)
    throw '로그인 실패';
   }
}

export const postJoin = async (joinData: FormData) => {
  try {
    const response = await publicAPI.post({url:`/auth/register`,data: joinData, type:'multipart'});
    if(response.status === 200){
      return response.data;
    }
    throw '회원가입 실패';
  }catch (e){
    console.error(e)
    throw '회원가입 실패';
  }
}
