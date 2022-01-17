export type Relation = {
  id: number;
  content: string;
};

export type NeososeoFormData = {
  title: string;
  content: string;
  imageSub: string;
  relation: Relation[];
  userName: string;
  userID: number;
  formID: number;
};

export type NeososeoAnswerData = {
  userID: number;
  formID: number;
  name: string;
  relationID: number;
  answer: string;
  keyword: string[];
};
