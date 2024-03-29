import { AxiosError } from 'axios';

import { LoginUserService } from '@api/login-user';
import { STATUS_CODE } from '@utils/constant';
import { publicAPI, privateAPI } from './base';
import { BadRequestError, ForbiddenError } from '@api/types/errors';

export function loginUserRemote(): LoginUserService {
  const getUserInfo = async (token: string) => {
    const response = await publicAPI
      .get({ url: '/user', headers: { accesstoken: token } })
      .catch((error: AxiosError) => {
        if (error.response?.status === STATUS_CODE.BAD_REQUEST)
          throw new BadRequestError('유저 조회에 실패하였습니다.');
      });
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
        data: { authenticationCode: authorizationCode, provider: 'kakao' },
      })
      .catch((error: AxiosError) => {
        if (error.response?.status === STATUS_CODE.BAD_REQUEST)
          throw new BadRequestError('로그인에 실패하였습니다.');
      });
    const { id, profileId, name, image, refreshToken } = response.data.user;
    return {
      isJoined: profileId.length > 0 && name.length > 0,
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

  const postUserInfo = async (joinData: FormData) => {
    const response = await privateAPI
      .post({
        url: `/auth/register`,
        data: joinData,
        type: 'multipart',
      })
      .catch((error: AxiosError) => {
        if (error.response?.status === STATUS_CODE.FORBIDDEN)
          throw new ForbiddenError('이미 가입되었습니다.');
      });
    if (response.status === STATUS_CODE.OK) {
      const { id, profileId, name, image, refreshToken } = response.data.user;
      return {
        isJoined: profileId.length > 0 && name.length > 0,
        accessToken: response.data.accesstoken,
        refreshToken: refreshToken,
        user: {
          id: Number(id),
          username: name,
          userID: profileId,
          profileImage: image,
        },
      };
    }
    return null;
  };
  return { getUserInfo, postLogin, postUserInfo };
}
