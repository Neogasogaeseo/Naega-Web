import { NeogaService } from '@api/neoga';
import { NEOGA_DATA } from '../mock/neoga.data';
import { privateAPI } from './base';

export function NeogaDataRemote(): NeogaService {
  const getBannerTemplate = async () => {
    const response = await privateAPI.get({ url: `/form/banner` });
    if (response.status === 200)
      return {
        id: response.data.id,
        title: response.data.title,
        content: response.data.subtitle,
        isNew: response.data.isNew,
        isBanner: response.data.isBanner,
        src: response.data.lightIconImage,
        backgroundColor: response.data.colorCode,
      };
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
        content: data.subtitle,
        isNew: data.isNew,
        src: data.lightIconImage,
        backgroundColor: data.colorCode,
        isCreated: data.isDeleted === undefined ? false : !data.isDeleted,
      }));
    else throw '서버 통신 실패';
  };

  const getMainResultCard = async () => {
    await wait(2000);
    return NEOGA_DATA.RESULT_CARD_TEMPLATE;
  };

  const getFormResultCard = async () => {
    await wait(2000);
    return NEOGA_DATA.RESULT_CARD_TEMPLATE;
  };

  const getResultKeywords = async () => {
    await wait(2000);
    return NEOGA_DATA.KEYWORD_LISTS;
  };

  const getAllResultListTemplates = async () => {
    await wait(2000);
    return NEOGA_DATA.NEOGA_RESULT;
  };

  const postAnswerBookmark = async () => {
    await wait(1000);
    return { isSuccess: true };
  };

  return {
    getBannerTemplate,
    getMainTemplate,
    getAllTemplates,
    getMainResultCard,
    getFormResultCard,
    getResultKeywords,
    getAllResultListTemplates,
    postAnswerBookmark,
  };
}

const wait = (milliSeconds: number) => new Promise((resolve) => setTimeout(resolve, milliSeconds));
