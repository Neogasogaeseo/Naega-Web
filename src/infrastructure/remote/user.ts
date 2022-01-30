import { UserService } from '@api/user';
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

    return { id: response.data.id, content: response.data.name, color: response.data.colorcode };
  };

  const getMyPageInfo = async (userID: string) => {
    const response = await publicAPI.get({ url: `/user/${userID}` });
    return {
      username: response.data.user.name,
      userID: response.data.user.profileId,
      profileImage: response.data.user.image,
      neososeo: response.data.answerKeywordList
        ? response.data.answerKeywordList.map((keyword: any) => ({
            id: keyword.keywordId,
            content: keyword.keywordName,
            color: keyword.colorCode,
          }))
        : [],
      team: response.data.teamKeywordList
        ? response.data.teamKeywordList.map((keyword: any) => ({
            id: keyword.keywordId,
            content: keyword.keywordName,
            color: keyword.colorCode,
          }))
        : [],
    };
  };

  const getNeososeoBookmark = async (userID: string) => {
    const response = await publicAPI.get({ url: `/user/${userID}/answer` });
    return {
      count: response.data ? response.data.length : 0,
      answerList: response.data
        ? response.data.map((bookmark: any) => ({
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
          }))
        : [],
    };
  };

  const getFeedbackBookmark = async (userID: string) => {
    const response = await publicAPI.get({ url: `/user/${userID}/team` });
    console.log(response.data.pinnedFeedbackList);
    return {
      count: response.data.pinnedFeedbackList ? response.data.pinnedFeedbackList.length : 0,
      teamList: response.data.pinnedFeedbackList
        ? response.data.teamList.map((team: any) => ({
            // 피드백 목록과 팀 목록 모두 존재
            id: team.id,
            profileImage: team.image,
            profileName: team.name,
          }))
        : response.data.map((team: any) => ({
            // 팀 목록만 존재
            id: team.id,
            profileImage: team.image,
            profileName: team.name,
          })),
      feedbackList: response.data.pinnedFeedbackList
        ? response.data.pinnedFeedbackList.map((feedback: any) => ({
            id: feedback.feedbackId,
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
          }))
        : [],
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
