import { NeogaService } from '@api/neoga';
import { NEOGA_DATA } from './neoga.data';

export function neogaDataMock(): NeogaService {
  const getMainTemplate = async () => {
    await wait(2000);
    return NEOGA_DATA.MAIN_TEMPLATE;
  };

  const getAllTemplates = async () => {
    await wait(2000);
    return NEOGA_DATA.ALL_TEMPLATES;
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

  return { getMainTemplate, getAllTemplates, getResultKeywords, getAllResultListTemplates, postAnswerBookmark };

}

const wait = (milliSeconds: number) => new Promise((resolve) => setTimeout(resolve, milliSeconds));
