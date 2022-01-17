export type NeogaCardItem = {
  id: number;
  content: string;
  title: string;
  isNew: boolean;
  src: string;
  backgroundColor: string;
};

export type Keywordlists = {
  id: string;
  content: string;
  color: string;
};

export type ResultFormList = {
  formID: number;
  content: string;
  writer: string;
  category: string;
  createdAt: string;
  keywordlists: Keywordlists[];
};
