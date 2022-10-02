import { NeogaService } from '@api/neoga';
import { NEOGA_DATA } from './neoga.data';

export function neogaDataMock(): NeogaService {
  const getBannerTemplate = async () => {
    await wait(20);
    const data = NEOGA_DATA.BANNER_TEMPLATE;
    return {
      ...data,
      title: data.title.replaceAll('*', '').replaceAll('{{user}}', '나'),
      content: data.content.replaceAll('{{user}}', '나'),
    };
  };

  const getMainTemplate = async () => {
    await wait(2000);
    const data = NEOGA_DATA.MAIN_TEMPLATE;
    return data.map((d) => ({
      ...d,
      title: d.title.replaceAll('{{user}}', '나'),
    }));
  };

  const getAllTemplates = async () => {
    await wait(2000);
    const data = NEOGA_DATA.ALL_TEMPLATES;
    return data.map((d) => ({
      ...d,
      title: d.title.replace('\\n', ' ').replaceAll('*', '').replaceAll('{{user}}', '나'),
      content: d.content.replace('\\n', ' ').replaceAll('{{user}}', '나'),
    }));
  };

  const getMainResultCard = async () => {
    await wait(2000);
    const data = NEOGA_DATA.RESULT_CARD_TEMPLATE;
    return {
      resultList: data.resultList.map((d) => ({
        ...d,
        title: d.title.replace('\\n', ' ').replaceAll('*', '').replaceAll('{{user}}', '나'),
      })),
      count: data.count,
    };
  };

  const getAllFormCard = async () => {
    await wait(2000);
    const data = NEOGA_DATA.RESULT_CARD_TEMPLATE;
    return {
      resultList: data.resultList.map((d) => ({
        ...d,
        title: d.title.replace('\\n', ' ').replaceAll('*', '').replaceAll('{{user}}', '나'),
        subtitle: d.subtitle.replaceAll('{{user}}', '나'),
      })),
      count: data.count,
    };
  };

  const postAnswerBookmark = async () => {
    await wait(1000);
    return { isSuccess: true };
  };

  const deleteAnswer = async () => {
    await wait(1000);
    return { isSuccess: true };
  };

  const postCreateForm = async () => {
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
    postCreateForm,
    getCreateFormInfo,
    getNeososeoInfo,
    getNeososeoFeedback,
  };
}

const wait = (milliSeconds: number) => new Promise((resolve) => setTimeout(resolve, milliSeconds));
