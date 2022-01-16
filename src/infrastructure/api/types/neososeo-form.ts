import { Keyword } from './user';

export type NeososeoFormData = {
  title: string;
  content: string;
  imageSub: string;
  relation: string[];
  userName: string;
};

export type NeososeoAnswerData = {
  userID: number;
  formID: number;
  name: string;
  relation: string;
  answer: string;
  keyword: Keyword[];
};
