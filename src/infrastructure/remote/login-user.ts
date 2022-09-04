import { AxiosError } from 'axios';

import { LoginUserService } from '@api/login-user';
import { STATUS_CODE } from '@utils/constant';
import { publicAPI } from './base';
import { NotFoundError } from '@api/types/errors';

export function loginUserRemote(): LoginUserService {
  const getUserInfo = async (token: string) => {
    const response = await publicAPI.get({ url: '/user', headers: { accesstoken: token } });
    if (response.status !== STATUS_CODE.OK) throw '유저 조회 실패';
    return {
      id: response.data.id,
      username: response.data.name,
      userID: response.data.profileId,
      profileImage: response.data.image,
      accessToken: token,
    };
  };

  const postLogin = async (authorizationCode: string) => {
    const response = await publicAPI
      .post({
        url: `/auth/login`,
        data: { authenticationCode: authorizationCode },
      })
      .catch((error: AxiosError) => {
        if (error.response?.status === STATUS_CODE.NOT_FOUND)
          throw new NotFoundError('로그인에 실패하였습니다.');
      });
    const { id, profileId, name, image, refreshToken } = response.user;
    return {
      isJoined: profileId.length > 0 && name.length > 0 && image.length > 0,
      accessToken: response.data.accesstoken,
      refreshToken: refreshToken,
      user: {
        id: Number(id),
        username: name,
        userID: profileId,
        profileImage: image,
      },
    };
  };
  return { getUserInfo, postLogin };
}
