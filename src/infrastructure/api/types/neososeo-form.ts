export type NeososeoFormData = {
  title: string;
  content: string;
  imageSub: string;
  relation: string[];
  userName: string;
  userID: number;
  formID: number;
};

export type NeososeoAnswerData = {
  userID: number;
  formID: number;
  name: string;
  relation: string;
  answer: string;
  keyword: string[];
};
