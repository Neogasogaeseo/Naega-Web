import { NeogaService } from '@api/neoga';
import { BadRequestError, NotFoundError } from '@api/types/errors';
import { STATUS_CODE } from '@utils/constant';
import { removeSpecialCharacters } from '@utils/string';
import { AxiosError } from 'axios';
import { privateAPI } from './base';

export function NeogaDataRemote(): NeogaService {
  const getBannerTemplate = async () => {
    const response = await privateAPI.get({ url: `/form/banner` });
    if (response.status === STATUS_CODE.OK)
      return response.data
        ? {
            id: response.data.id,
            title: response.data.title.replace('\\n', ' ').replaceAll('*', ''),
            content: response.data.subtitle.replace('\\n', '\n'),
            isNew: response.data.isNew,
            isBanner: response.data.isBanner,
            src: response.data.darkIconImage,
            backgroundColor: response.data.colorCode,
            isCreated: response.data.isDeleted === undefined ? false : !response.data.isDeleted,
          }
        : null;
    else throw '서버 통신 실패';
  };

  const getMainTemplate = async () => {
    const response = await privateAPI.get({ url: `/form/template/popular` });
    if (response.status === STATUS_CODE.OK)
      return response.data.map((data: any) => ({
        id: data.id,
        title: data.title,
        src: data.darkIconImage,
        backgroundColor: data.colorCode,
        isCreated: data.isDeleted === undefined ? false : !data.isDeleted,
      }));
    else throw '서버 통신 실패';
  };

  const getAllTemplates = async (viewMode: 'recent' | 'popular') => {
    const response = await privateAPI.get({ url: `/form/template/${viewMode}` });
    if (response.status === STATUS_CODE.OK)
      return response.data.map((data: any) => ({
        id: data.id,
        title: data.title.replace('\\n', ' ').replaceAll('*', ''),
        content: data.subtitle.replace('\\n', ' '),
        isNew: data.isNew,
        src: data.darkIconImage,
        backgroundColor: data.colorCode,
        isCreated: data.isDeleted === undefined ? false : !data.isDeleted,
      }));
    else throw '서버 통신 실패';
  };

  const getMainResultCard = async () => {
    const response = await privateAPI.get({ url: `/form` });
    if (response.axiosStatus === STATUS_CODE.NO_CONTENT || response.data === undefined) {
      return { resultList: [], count: 0 };
    } else if (response.status === STATUS_CODE.OK)
      return {
        resultList: response.data.resultList
          ? response.data.resultList.map((result: any) => ({
              id: result.id,
              title: result.title.replace('\\n', ' ').replaceAll('*', ''),
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
                      fontColor: word.fontcolor,
                    }))
                  : [],
              })),
            }))
          : response.data
          ? response.data.map((result: any) => ({
              id: result.id,
              title: result.title.replace('\\n', ' ').replaceAll('*', ''),
              darkIconImage: result.darkIconImage,
              createdAt: result.createdAt,
              answer: [],
            }))
          : [],
        count: response.data.count,
      };
    else throw '서버 통신 실패';
  };

  const getAllFormCard = async () => {
    const response = await privateAPI.get({ url: `/form/all` });
    if (response.status === STATUS_CODE.OK)
      return {
        resultList: response.data.resultList
          ? response.data.resultList.map((result: any) => ({
              id: result.id,
              title: result.title.replace('\\n', ' ').replaceAll('*', ''),
              subtitle: result.subtitle,
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
                          fontColor: word.fontcolor,
                        }))
                      : [],
                  }))
                : [],
            }))
          : response.data
          ? response.data.map((result: any) => ({
              id: result.id,
              title: result.title.replace('\\n', ' ').replaceAll('*', ''),
              subtitle: result.subtitle,
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

  const createForm = async (formID: number) => {
    const response = await privateAPI
      .post({
        url: `/form/create`,
        data: { formId: formID },
      })
      .catch((error: AxiosError) => {
        if (error.response?.status === STATUS_CODE.BAD_REQUEST)
          throw new BadRequestError('폼 생성을 실패했습니다');
      });
    return { isCreated: response.status === 200, q: response.data };
  };

  const getCreateFormInfo = async (formID: number) => {
    const response = await privateAPI
      .get({
        url: `/form/create/${formID}`,
      })
      .catch((error: AxiosError) => {
        if (error.response?.status === STATUS_CODE.BAD_REQUEST)
          throw new NotFoundError('찾을 수 없는 페이지입니다.');
      });
    const { id, title, subtitle, darkIconImage } = response.data;
    if (response.status === STATUS_CODE.OK) {
      return {
        id: id,
        title: title.replace('\\n', ' ').replaceAll('*', ''),
        subtitle: subtitle.replace('\\n', '\n'),
        image: darkIconImage,
      };
    } else throw '서버 통신 실패';
  };

  const getNeososeoInfo = async (formID: number) => {
    const response = await privateAPI.get({ url: `/form/detail/${formID}` });
    if (!response.data) throw new NotFoundError('해당 유저와 폼 아이디로 생성된 폼이 없습니다.');
    return {
      id: response.data.form.id,
      title: removeSpecialCharacters(response.data.form.title),
      subtitle: response.data.form.subtitle.replace('\\n', '\n'),
      darkIconImage: response.data.form.darkIconImage,
      createdAt: response.data.form.createdAt,
      q: response.data.q,
      keywordList: response.data.keyword.map((keyword: any) => ({
        id: keyword.id,
        content: keyword.name,
        color: keyword.colorcode,
        fontColor: keyword.fontcolor,
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
              fontColor: keyword.fontcolor,
              answerId: keyword.answerId,
            })),
          }))
        : [],
    };
  };

  const deleteAnswer = async (answerID: number) => {
    const response = await privateAPI.delete({ url: `/form/answer/${answerID}` });
    return { isSuccess: response.success };
  };

  return {
    getBannerTemplate,
    getMainTemplate,
    getAllTemplates,
    getMainResultCard,
    getAllFormCard,
    postAnswerBookmark,
    createForm,
    getCreateFormInfo,
    getNeososeoInfo,
    getNeososeoFeedback,
    deleteAnswer,
  };
}
