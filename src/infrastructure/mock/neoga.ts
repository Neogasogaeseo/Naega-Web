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

  const getMainResultCard = async () => {
    await wait(2000);
    return NEOGA_DATA.RESULT_CARD_TEMPLATE;
  };

  const getAllFormCard = async () => {
    await wait(2000);
    return NEOGA_DATA.RESULT_CARD_TEMPLATE;
  };

  const postAnswerBookmark = async () => {
    await wait(1000);
    return { isSuccess: true };
  };

  const deleteAnswer = async () => {
    await wait(1000);
    return { isSuccess: true };
  };

  const createForm = async () => {
    await wait(2000);
    return { isCreated: true, q: '큐' };
  };

  const getCreateFormInfo = async () => {
    await wait(2000);
    return { id: 0, title: '', subtitle: '', image: '' };
  };

  const getNeososeoInfo = async () => {
    return {
      id: 1,
      title: 'aa',
      subtitle: 'aaa',
      darkIconImage:
        'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/285/smiling-face-with-hearts_1f970.png',
      createdAt: '2222-22-22',
      q: 'aafagara',
      keywordList: [],
    };
  };

  const getNeososeoFeedback = async () => {
    return { answerCount: 0, answerList: [] };
  };

  return {
    getBannerTemplate,
    getMainTemplate,
    getAllTemplates,
    getMainResultCard,
    getAllFormCard,
    postAnswerBookmark,
    deleteAnswer,
    createForm,
    getCreateFormInfo,
    getNeososeoInfo,
    getNeososeoFeedback,
  };
}

const wait = (milliSeconds: number) => new Promise((resolve) => setTimeout(resolve, milliSeconds));
