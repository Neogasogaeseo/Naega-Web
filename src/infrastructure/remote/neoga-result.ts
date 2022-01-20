import { privateAPI } from './base';
import { ResultDetailList } from '@api/types/neoga';

export const getNeogaResult = async (formID: number): Promise<ResultDetailList | undefined> => {
  try {
    const response = await privateAPI.get({ url: `/form/detail/${formID}` });
    return {
      id: response.data.id,
      title: response.data.title,
      subtitle: response.data.subtitle,
      darkIconImage: response.data.darkIconImage,
      createdAt: response.data.createdAt,
      q: response.data.q,
      keywordlists: response.data.keyword.map((keyword: any) => ({
        id: keyword.id,
        content: keyword.name,
        color: keyword.colorcode,
      })),
    };
  } catch (e) {
    throw '서버 통신 실패';
  }
};
