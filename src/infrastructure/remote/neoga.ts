import { NeogaService } from '@api/neoga';
import { NotFoundError } from '@api/types/errors';
import { AxiosError } from 'axios';
import { privateAPI } from './base';

export function NeogaDataRemote(): NeogaService {
  const getBannerTemplate = async () => {
    const response = await privateAPI.get({ url: `/form/banner` });
    if (response.status === 200)
      return response.data
        ? {
            id: response.data.id,
            title: response.data.title,
            content: response.data.subtitle.replace('\\n', '\n'),
            isNew: response.data.isNew,
            isBanner: response.data.isBanner,
            src: response.data.lightIconImage,
            backgroundColor: response.data.colorCode,
            isCreated: response.data.isDeleted === undefined ? false : !response.data.isDeleted,
          }
        : null;
    else throw '서버 통신 실패';
  };

  const getMainTemplate = async () => {
    const response = await privateAPI.get({ url: `/form/template/popular` });
    if (response.status === 200)
      return response.data.map((data: any) => ({
        id: data.id,
        title: data.title,
        src: data.lightIconImage,
        backgroundColor: data.colorCode,
        isCreated: data.isDeleted === undefined ? false : !data.isDeleted,
      }));
    else throw '서버 통신 실패';
  };

  const getAllTemplates = async (viewMode: 'recent' | 'popular') => {
    const response = await privateAPI.get({ url: `/form/template/${viewMode}` });
    if (response.status === 200)
      return response.data.map((data: any) => ({
        id: data.id,
        title: data.title,
        content: data.subtitle.replace('\\n', ' '),
        isNew: data.isNew,
        src: data.lightIconImage,
        backgroundColor: data.colorCode,
        isCreated: data.isDeleted === undefined ? false : !data.isDeleted,
      }));
    else throw '서버 통신 실패';
  };

  const getMainResultCard = async () => {
    const response = await privateAPI.get({ url: `/form` });
    if (response.status === 200)
      return {
        resultList: response.data.resultList
          ? response.data.resultList.map((result: any) => ({
              id: result.id,
              title: result.title,
              darkIconImage: result.darkIconImage,
              createdAt: result.createdAt,
              answer: result.answer.map((comment: any) => ({
                id: comment.id,
                name: comment.name,
                relationship: comment.relationship,
                content: comment.content,
                keyword: comment.keyword
                  ? comment.keyword.map((word: any) => ({
                      id: word.id,
                      content: word.name,
                      color: word.colorCode,
                    }))
                  : [],
              })),
            }))
          : response.data
          ? response.data.map((result: any) => ({
              id: result.id,
              title: result.title,
              darkIconImage: result.darkIconImage,
              createdAt: result.createdAt,
              answer: [],
            }))
          : [],
        count: response.data.count,
      };
    else throw '서버 통신 실패';
  };

  const getFormResultCard = async () => {
    const response = await privateAPI.get({ url: `/form/new` });
    if (response.status === 200)
      return {
        resultList: response.data.resultList
          ? response.data.resultList.map((result: any) => ({
              id: result.id,
              title: result.title.replace('\\n', '\n'),
              darkIconImage: result.darkIconImage,
              createdAt: result.createdAt,
              answer: result.answer
                ? result.answer.map((comment: any) => ({
                    id: comment.id,
                    name: comment.name,
                    relationship: comment.relationship,
                    content: comment.content,
                    keyword: comment.keyword
                      ? comment.keyword.map((word: any) => ({
                          id: word.id,
                          content: word.name,
                          color: word.colorCode,
                        }))
                      : [],
                  }))
                : [],
            }))
          : response.data
          ? response.data.map((result: any) => ({
              id: result.id,
              title: result.title.replace('\\n', '\n'),
              darkIconImage: result.darkIconImage,
              createdAt: result.createdAt,
              answer: [],
            }))
          : [],
        count: response.data.count ?? response.data,
      };
    else throw '서버 통신 실패';
  };

  const postAnswerBookmark = async (answerID: number) => {
    const response = await privateAPI.put({ url: `/form/detail/answer/${answerID}/pin` });
    return { isSuccess: response.success };
  };

  const postCreateForm = async (formID: number) => {
    const response = await privateAPI
      .post({
        url: `/form/create`,
        data: { formId: formID },
      })
      .catch((error: AxiosError) => {
        console.error(error.response);
      });
    return { isCreated: response.message === '이미 존재하는 폼입니다', q: response.data };
  };

  const getCreateFormInfo = async (formID: number) => {
    const response = await privateAPI
      .get({
        url: `/form/create/${formID}`,
      })
      .catch((error: AxiosError) => {
        console.log(error);
        if (error.response?.status === 400) throw new NotFoundError('찾을 수 없는 페이지입니다.');
      });
    const { id, title, subtitle, darkIconImage } = response.data;
    if (response.status === 200) {
      return {
        id: id,
        title: title,
        subtitle: subtitle.replace('\\n', '\n'),
        image: darkIconImage,
      };
    } else throw '서버 통신 실패';
  };

  const getNeososeoInfo = async (formID: number) => {
    const response = await privateAPI.get({ url: `/form/detail/${formID}` });
    if (!response.data) throw new NotFoundError('해당 유저와 폼 아이디로 생성된 폼이 없습니다.');
    return {
      id: response.data.id,
      title: response.data.title,
      subtitle: response.data.subtitle.replace('\\n', '\n'),
      darkIconImage: response.data.darkIconImage,
      createdAt: response.data.createdAt,
      q: response.data.q,
      keywordList: response.data.keyword.map((keyword: any) => ({
        id: keyword.id,
        content: keyword.name,
        color: keyword.colorcode,
      })),
    };
  };

  const getNeososeoFeedback = async (formID: number) => {
    const response = await privateAPI.get({ url: `/form/detail/${formID}/answer` });
    return {
      answerCount: response.data.answerCount,
      answerList: response.data.answer
        ? response.data.answer.map((feedback: any) => ({
            formID: feedback.formID,
            id: feedback.id,
            name: feedback.name,
            relationship: feedback.relationship,
            content: feedback.content,
            isPinned: feedback.isPinned,
            createdAt: feedback.createdAt,
            keywordList: feedback.keywords.map((keyword: any) => ({
              id: keyword.id,
              content: keyword.name,
              color: keyword.colorcode,
              answerId: keyword.answerId,
            })),
          }))
        : [],
    };
  };

  const deleteAnswer = async () => {
    return { isSuccess: true };
  };

  return {
    getBannerTemplate,
    getMainTemplate,
    getAllTemplates,
    getMainResultCard,
    getFormResultCard,
    postAnswerBookmark,
    postCreateForm,
    getCreateFormInfo,
    getNeososeoInfo,
    getNeososeoFeedback,
    deleteAnswer,
  };
}
