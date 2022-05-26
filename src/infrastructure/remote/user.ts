import { AxiosError } from 'axios';
import { privateAPI, publicAPI } from './base';
import { NotFoundError } from '@api/types/errors';
import { UserService } from '@api/user';
import { KEYWORD_PAGE, PICK_PAGE, STATUS_CODE } from '@utils/constant';
import { imgEmptyProfile } from '@assets/images';
import { MyDetail } from '@api/types/user';

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
      count: keyword.count,
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
            color: keyword.colorCode,
            fontColor: keyword.fontColor,
          }))
        : [],
      team: response.data.teamKeywordList
        ? response.data.teamKeywordList.map((keyword: any) => ({
            id: keyword.keywordId,
            content: keyword.keywordName,
            color: keyword.colorCode,
            fontColor: keyword.fontColor,
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
            question: bookmark.title.replace('\\n', ' ').replaceAll('*', ''),
            content: bookmark.content,
            isBookmarked: bookmark.isPinned,
            keywordList: bookmark.keywords.map((keyword: any) => ({
              id: keyword.name,
              content: keyword.name,
              color: keyword.colorCode,
              fontColor: keyword.fontColor,
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
              color: keyword.colorCode,
              fontColor: keyword.fontColor,
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
    return { isDuplicate: response.success };
  };

  const editUserProfile = async (formData: FormData) => {
    const response = await privateAPI.put({ url: `/user/edit`, data: formData, type: 'multipart' });
    return {
      isSuccess: response.success,
      profileId: response.data.user.profileId,
      name: response.data.user.name,
      image: response.data.image,
    };
  };

  const getMyKeywordList = async (page: number) => {
    const response = await privateAPI.get({
      url: `/user/myKeyword?offset=${page}&limit=${KEYWORD_PAGE}`,
    });
    return {
      totalCount: response.data.totalCount,
      keywordList: response.data.keyword.map((keyword: any) => ({
        id: keyword.id,
        content: keyword.name,
        color: keyword.colorcode,
        fontColor: keyword.fontcolor,
        count: keyword.count,
      })),
    };
  };

  const deleteMyKeyword = async (keywordID: number) => {
    const response = await privateAPI.delete({ url: `/user/myKeyword?keywordId=${keywordID}` });
    return { isSuccess: response.success };
  };

  const getMyFormInfo = async () => {
    const response = await privateAPI.get({ url: `/form/answer/pick/form` });
    return {
      formList: response.data.form
        ? response.data.form
            .map((form: any) => ({
              id: form.formId,
              profileImage: form.darkIconImage,
            }))
            .reduce((acc: MyDetail[], cur: MyDetail) => {
              if (acc.map((item) => item.id).includes(cur.id)) return acc;
              acc.push(cur);
              return acc;
            }, [])
        : [],
    };
  };

  const getMyAnswerInfo = async (page: number, formID?: number) => {
    const queryParamFormID = formID ? `formId=${formID}&` : '';
    const response = await privateAPI.get({
      url: `/form/answer/pick?${queryParamFormID}offset=${page}&limit=${PICK_PAGE}`,
    });
    return {
      answerList: response.data.answer
        ? response.data.answer.map((answer: any) => ({
            id: answer.answerId,
            formId: answer.formId,
            icon: answer.darkIconImage,
            question: answer.title.replace('\\n', ' ').replaceAll('*', ''),
            content: answer.content,
            isBookmarked: answer.isPinned,
            keywordList: answer.keywords.map((keyword: any) => ({
              id: keyword.name,
              content: keyword.name,
              color: keyword.colorCode,
              fontColor: keyword.fontColor,
            })),
          }))
        : [],
    };
  };

  const getMyTeamInfo = async () => {
    const response = await privateAPI.get({ url: `/team/feedback/pick/team` });
    return {
      teamList: response.data.team
        ? response.data.team.map((team: any) => ({
            id: team.id,
            profileImage: team.image || imgEmptyProfile,
          }))
        : [],
    };
  };

  const getMyFeedbackInfo = async (page: number, teamID?: number) => {
    const queryParamTeamID = teamID ? `teamId=${teamID}&` : '';
    const response = await privateAPI.get({
      url: `/team/feedback/pick?${queryParamTeamID}offset=${page}&limit=${PICK_PAGE}`,
    });
    if (response.axiosStatus === STATUS_CODE.NO_CONTENT) return { feedbackList: [] };
    return {
      feedbackList: response.data.feedback
        ? response.data.feedback.map((feedback: any) => ({
            id: feedback.feedbackId,
            writer: feedback.writerUserName,
            targetProfileID: feedback.userId,
            target: feedback.userName,
            createdAt: feedback.createdAt.slice(0, 10),
            body: feedback.content,
            isBookmarked: feedback.isPinned,
            keywordList: feedback.keywords.map((keyword: any) => ({
              id: keyword.name,
              content: keyword.name,
              color: keyword.colorCode,
              fontColor: keyword.fontColor,
            })),
          }))
        : [],
    };
  };

  const postWithdraw = async () => {
    const response = await privateAPI.delete({ url: '/user' });
    return { isSuccess: response.success };
  };

  return {
    getKeywords,
    postKeyword,
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
