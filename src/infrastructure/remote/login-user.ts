import { LoginUserService } from '@api/login-user';
import { publicAPI } from './base';

export function loginUserRemote(): LoginUserService {
  const getUserInfo = async (token: string) => {
    const response = await publicAPI.get({ url: '/user', headers: { accesstoken: token } });
    if (response.status !== 200) throw '유저 조회 실패';
    return {
      id: response.data.id,
      username: response.data.name,
      userID: response.data.profileId,
      profileImage: response.data.image,
      accessToken: token,
    };
  };
  return { getUserInfo };
}
