import { NotFoundError } from '@api/types/errors';
import { UserService } from '@api/user';
import { KEYWORD_PAGE, STATUS_CODE } from '@utils/constant';
import { AxiosError } from 'axios';
import { privateAPI, publicAPI } from './base';

export function userDataRemote(): UserService {
  const getKeywords = async (userID: number, page: number) => {
    const response = await publicAPI.get({
      url: `/user/keyword?userId=${userID}&offset=${page}&limit=${KEYWORD_PAGE}`,
    });
    return response.data.keyword.map((keyword: any) => ({
      id: keyword.id,
      content: keyword.name,
      color: keyword.colorcode,
      fontColor: keyword.fontcolor,
    }));
  };

  const postKeyword = async (userID: number, content: string) => {
    const response = await publicAPI.post({
      url: '/user/keyword',
      data: { name: content, userId: userID },
    });

    return {
      id: response.data.id,
      content: response.data.name,
      color: response.data.colorcode,
      fontColor: response.data.fontcolor,
    };
  };

  const getMyPageInfo = async (userID: string) => {
    const response = await publicAPI.get({ url: `/user/${userID}` }).catch((error: AxiosError) => {
      if (error.response?.status === STATUS_CODE.NOT_FOUND)
        throw new NotFoundError('사용자를 찾을 수 없습니다.');
    });
    return {
      username: response.data.user.name,
      userID: response.data.user.profileId,
      profileImage: response.data.user.image,
      neososeo: response.data.answerKeywordList
        ? response.data.answerKeywordList.map((keyword: any) => ({
            id: keyword.keywordId,
            content: keyword.keywordName,
            color: keyword.colorcode,
            fontColor: keyword.fontcolor,
          }))
        : [],
      team: response.data.teamKeywordList
        ? response.data.teamKeywordList.map((keyword: any) => ({
            id: keyword.keywordId,
            content: keyword.keywordName,
            color: keyword.colorcode,
            fontColor: keyword.fontcolor,
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
            icon: bookmark.darkIconImage,
            question: bookmark.title,
            content: bookmark.content,
            isBookmarked: bookmark.isPinned,
            keywordList: bookmark.keywords.map((keyword: any) => ({
              id: keyword.name,
              content: keyword.name,
              color: keyword.colorcode,
              fontColor: keyword.fontcolor,
            })),
            targetUserID: bookmark.userId,
          }))
        : [],
    };
  };

  const getFeedbackBookmark = async (userID: string) => {
    const response = await publicAPI.get({ url: `/user/${userID}/team` });
    if (response.axiosStatus === STATUS_CODE.NO_CONTENT)
      return { count: 0, teamList: [], feedbackList: [] };
    return {
      count: response.data.pinnedFeedbackList ? response.data.pinnedFeedbackList.length : 0,
      teamList: response.data.teamList.map((team: any) => ({
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
              id: keyword.name,
              content: keyword.name,
              color: keyword.colorcode,
              fontColor: keyword.fontcolor,
            })),
            targetProfileID: feedback.profileId,
            isBookmarked: feedback.isPinned,
          }))
        : [],
    };
  };

  const getDuplicationCheck = async (userID: string) => {
    const response = await privateAPI.get({
      url: `/user/edit/profileId/${userID}`,
    });
    return { isSuccess: response.success };
  };

  const editUserProfile = async (formData: FormData) => {
    const response = await privateAPI.put({ url: `/user/edit`, data: formData });
    return {
      isSuccess: response.success,
      profileId: response.data.user.profileId,
      name: response.data.user.name,
      image: response.data.image,
    };
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
