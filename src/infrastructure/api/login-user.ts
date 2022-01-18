import { LoginUser, IJoin } from './types/user';
import { publicAPI } from '../remote/base';

export interface LoginUserService {
  getUserInfo(token: string): Promise<LoginUser>;
}

export const postJoin = async (joinData: IJoin) => {
  try {
    const response = await publicAPI.post({url:`/auth/register`,data: joinData});
    console.log("대답말해라",response);
    if(response.status === 200){
      console.log(response.data);
    }
  }catch (e){
    console.log("잘못됨",e);

  }

}
