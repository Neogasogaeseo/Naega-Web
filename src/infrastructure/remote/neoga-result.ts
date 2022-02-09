import { privateAPI } from './base';
import { ResultDetailList, ResultFeedList } from '@api/types/neoga';

export const getNeogaResult = async (formID: number): Promise<ResultDetailList | undefined> => {
  const response = await privateAPI.get({ url: `/form/detail/${formID}` });
  if (response.status === 200 && response.data)
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
};

export const getNeogaFeedbackResult = async (
  formID: number,
): Promise<ResultFeedList | undefined> => {
  const response = await privateAPI.get({ url: `/form/detail/${formID}/answer` });
  if (response.status === 200 && response.data)
    return {
      answerCount: response.data.answerCount,
      answer: response.data.answer
        ? response.data.answer.map((feedback: any) => ({
            formID: feedback.formID,
            id: feedback.id,
            name: feedback.name,
            relationship: feedback.relationship,
            content: feedback.content,
            isPinned: feedback.isPinned,
            createdAt: feedback.createdAt,
            keywords: feedback.keywords.map((keyword: any) => ({
              id: keyword.id,
              content: keyword.name,
              color: keyword.colorcode,
              answerId: keyword.answerId,
            })),
          }))
        : [],
    };
};
