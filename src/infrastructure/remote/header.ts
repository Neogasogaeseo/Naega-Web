import { HeaderService } from '@api/header';
import { STATUS_CODE } from '@utils/constant';
import { privateAPI } from './base';

export function headerRemote(): HeaderService {
  const getIsNotice = async () => {
    const response = await privateAPI.get({ url: '/user/notice/bar' });
    if (response.status === STATUS_CODE.OK) {
      return response.data.notice;
    } else throw '서버 통신 실패';
  };
  return { getIsNotice };
}
