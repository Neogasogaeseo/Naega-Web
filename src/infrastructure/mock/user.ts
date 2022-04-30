import { UserService } from '@api/user';
import { USER_DATA } from './user.data';

export function userDataMock(): UserService {
  const getKeywords = async () => {
    await wait(2000);
    return USER_DATA.KEYWORDS;
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

  const getDuplicationCheck = async () => {
    await wait(1000);
    return { isSuccess: true };
  };

  const editUserProfile = async () => {
    await wait(1000);
    return USER_DATA.EDIT_PROFILE_INFO;
  };

  return {
    getKeywords,
    postKeyword,
    getMyPageInfo,
    getNeososeoBookmark,
    getFeedbackBookmark,
    getDuplicationCheck,
    editUserProfile,
  };
}

const wait = (milliSeconds: number) => new Promise((resolve) => setTimeout(resolve, milliSeconds));
