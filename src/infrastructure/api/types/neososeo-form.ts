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
  formID: number;
  answerCount: number;
  createdAt: string;
};

export type NeososeoAnswerData = {
  userID: number;
  formID: number;
  name: string;
  relationID: number;
  answer: string;
  keyword: string[];
};
