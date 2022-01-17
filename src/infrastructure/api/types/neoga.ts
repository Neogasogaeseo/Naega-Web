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

export type ResultFormList = {
  formID: number;
  content: string;
  writer: string;
  category: string;
  createdAt: string;
  keywordlists: Keyword[];
};
