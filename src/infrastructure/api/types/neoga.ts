import { Keyword } from './user';

export type NeogaCardItem = {
  id: number;
  content: string;
  title: string;
  isNew: boolean;
  src: string;
  backgroundColor: string;
  isCreated: boolean;
};
export type NeogaMainCardItem = Omit<NeogaCardItem, 'content' | 'isNew'>;

export type NeogaBannerInfo = Omit<NeogaCardItem, 'isCreated'>;

export type NeogaBannerItem = NeogaBannerInfo & {
  isBanner: boolean;
  isCreated?: boolean;
};

export type ResultFormList = {
  formID: number;
  content: string;
  writer: string;
  category: string;
  createdAt: string;
  keywordList: Keyword[];
};

export type ResultDetailList = {
  id: number;
  title: string;
  subtitle: string;
  darkIconImage: string;
  createdAt: string;
  q: string;
  keywordList: Keyword[];
};

export type NeogaAnswerList = {
  id: number;
  name: string;
  relationship: string;
  content: string;
  keyword: Keyword[];
};

export type NeogaResultList = {
  id: number;
  title: string;
  darkIconImage: string;
  createdAt: string;
  answer?: NeogaAnswerList[];
};

export type NeogaResultCardItem = {
  resultList: NeogaResultList[];
  count: number;
};

export type CreateFormInfo = {
  id: number;
  title: string;
  subtitle: string;
  image: string;
};

export type ResultFeedbackList = {
  answerCount: number;
  answer: FeedAnswer[];
};

export type FeedAnswer = {
  formID: number;
  id: number;
  name: string;
  relationship: string;
  content: string;
  isPinned: boolean;
  createdAt: string;
  keywordList: Keyword[];
};
