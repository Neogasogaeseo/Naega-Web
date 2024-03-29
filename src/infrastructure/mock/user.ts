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

  const undoPostKeyword = async () => {
    return { isSuccess: true };
  };

  const getMyPageInfo = async (userID: string) => {
    await wait(1000);
    return USER_DATA.MY_PAGE_INFO(userID);
  };

  const getNeososeoBookmark = async () => {
    await wait(1000);
    const data = USER_DATA.NEOSOSEO_BOOKMARK;
    return {
      count: data.count,
      answerList: data.answerList.map((d) => ({
        ...d,
        question: d.question.replaceAll('{{user}}', '나'),
      })),
    };
  };

  const getFeedbackBookmark = async () => {
    await wait(1000);
    return USER_DATA.TEAM_FEEDBACK_BOOKMARK;
  };

  const getDuplicationCheck = async () => {
    await wait(1000);
    return { isDuplicate: true };
  };

  const editUserProfile = async () => {
    await wait(1000);
    return USER_DATA.EDIT_PROFILE_INFO;
  };

  const getMyKeywordList = async () => {
    await wait(1000);
    return USER_DATA.MY_KEYWORD_INFO;
  };

  const deleteMyKeyword = async () => {
    await wait(1000);
    return { isSuccess: true };
  };

  const getMyFormInfo = async () => {
    await wait(1000);
    return USER_DATA.MY_FORM_INFO;
  };

  const getMyAnswerInfo = async () => {
    await wait(1000);
    const data = USER_DATA.MY_ANSWER_INFO;
    return {
      answerList: data.answerList.map((d) => ({
        ...d,
        question: d.question.replaceAll('{{user}}', '나'),
      })),
    };
  };

  const getMyTeamInfo = async () => {
    await wait(1000);
    return USER_DATA.MY_TEAM_INFO;
  };

  const getMyFeedbackInfo = async () => {
    await wait(1000);
    return USER_DATA.MY_FEEDBACK_INFO;
  };

  const postWithdraw = async () => {
    return { isSuccess: true };
  };

  return {
    getKeywords,
    postKeyword,
    undoPostKeyword,
    getMyPageInfo,
    getNeososeoBookmark,
    getFeedbackBookmark,
    getDuplicationCheck,
    editUserProfile,
    getMyKeywordList,
    deleteMyKeyword,
    getMyFormInfo,
    getMyAnswerInfo,
    getMyTeamInfo,
    getMyFeedbackInfo,
    postWithdraw,
  };
}

const wait = (milliSeconds: number) => new Promise((resolve) => setTimeout(resolve, milliSeconds));
