import { UserService } from '@api/user';
import { USER_DATA } from '@infrastructure/mock/user.data';
import { privateAPI } from './base';

export function userDataRemote(): UserService {
  const getKeywords = async (userID: number) => {
    const response = await privateAPI.get({
      url: `/user/keyword?userId=${userID}&offset=0&limit=40`,
    });
    return response.data.keyword.map((keyword: any) => ({
      id: keyword.id,
      content: keyword.name,
      color: keyword.colorcode,
    }));
  };

  const postKeyword = async (userID: number, content: string) => {
    await wait(1000);
    return USER_DATA.KEYWORD(content);
  };

  const getMyPageInfo = async (userID: string) => {
    await wait(1000);
    return USER_DATA.MY_PAGE_INFO(userID);
  };

  const getNeososeoBookmark = async () => {
    await wait(1000);
    return USER_DATA.NEOSOSEO_BOOKMARK;
  };

  const getFeedbackBookmark = async () => {
    await wait(1000);
    return USER_DATA.TEAM_FEEDBACK_BOOKMARK;
  };

  return {
    getKeywords,
    postKeyword,
    getMyPageInfo,
    getNeososeoBookmark,
    getFeedbackBookmark,
  };
}

const wait = (milliSeconds: number) => new Promise((resolve) => setTimeout(resolve, milliSeconds));
