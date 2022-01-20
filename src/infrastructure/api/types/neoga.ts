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
};

export type ResultFormList = {
  formID: number;
  content: string;
  writer: string;
  category: string;
  createdAt: string;
  keywordlists: Keyword[];
};


export type ResultDetailList = {
  id: number;
  title: string;
  subtitle: string;
  darkIconImage: string;
  createdAt: string;
  q: string;
  keywordlists :Keyword[];
}