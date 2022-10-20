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
  userProfileImage?: string;
  createdID: number;
  answerCount: number;
  createdAt: string;
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
