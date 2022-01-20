import { UserService } from '@api/user';
import { USER_DATA } from '@infrastructure/mock/user.data';
import { publicAPI } from './base';

export function userDataRemote(): UserService {
  const getKeywords = async (userID: number) => {
    const response = await publicAPI.get({
      url: `/user/keyword?userId=${userID}&offset=0&limit=40`,
    });
    return response.data.keyword.map((keyword: any) => ({
      id: keyword.id,
      content: keyword.name,
      color: keyword.colorcode,
    }));
  };

  const postKeyword = async (userID: number, content: string) => {
    const response = await publicAPI.post({
      url: '/user/keyword',
      data: { name: content, userId: userID },
    });

    console.log(response);

    return { id: response.data.id, content: response.data.name, color: response.data.colorCode };
  };

  const getMyPageInfo = async (userID: string) => {
    await wait(1000);
    return USER_DATA.MY_PAGE_INFO(userID);
  };

  const getNeososeoBookmark = async (userID: string) => {
    const response = await publicAPI.get({ url: `/user/${userID}/answer` });
    return {
      count: response.data.length,
      answerList: response.data.map((bookmark: any) => ({
        id: bookmark.answerId,
        icon: bookmark.lightIconImage,
        question: bookmark.title,
        content: bookmark.content,
        isBookmarked: bookmark.isPinned,
        keywordList: bookmark.keywords.map((keyword: any) => ({
          id: keyword.answerId,
          content: keyword.name,
          color: keyword.colorCode,
        })),
        targetUserID: bookmark.userId,
      })),
    };
  };

  const getFeedbackBookmark = async (userID: string) => {
    const response = await publicAPI.get({ url: `/user/${userID}/team` });
    return {
      count: response.data.pinnedFeedbackList.length,
      teamList: response.data.teamList.map((team: any) => ({
        id: team.id,
        profileImage: team.image,
        profileName: team.name,
      })),
      feedbackList: response.data.pinnedFeedbackList.map((feedback: any) => ({
        id: feedback.id,
        writer: feedback.writerName,
        target: feedback.name,
        body: feedback.content,
        createdAt: feedback.createdAt,
        keywordList: feedback.keywords.map((keyword: any) => ({
          id: keyword.answerId,
          content: keyword.name,
          color: keyword.colorCode,
        })),
        targetProfileID: feedback.profileId,
        isBookmarked: feedback.isPinned,
      })),
    };
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
