import { NeogaService } from '@api/neoga';
import { NEOGA_DATA } from './neoga.data';

export function neogaDataMock(): NeogaService {
  const getBannerTemplate = async () => {
    await wait(20);
    return NEOGA_DATA.BANNER_TEMPLATE;
  };

  const getMainTemplate = async () => {
    await wait(2000);
    return NEOGA_DATA.MAIN_TEMPLATE;
  };

  const getAllTemplates = async () => {
    await wait(2000);
    return NEOGA_DATA.ALL_TEMPLATES;
  };

  const getResultCard = async() => {
    await wait(2000);
    return NEOGA_DATA.RESULT_CARD_TEMPLATE;
  }

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
    getResultCard,
    getResultKeywords,
    getAllResultListTemplates,
    postAnswerBookmark,
  };
}

const wait = (milliSeconds: number) => new Promise((resolve) => setTimeout(resolve, milliSeconds));
