export type IssueData = {
  createdAt: string;
  title: string;
  category: string;
  team: TeamData;
  issueList: IssueDetail[];
  writer: string;
  thumbnail?: string;
};

type TeamData = {
  teammates: string[];
  thumbnail: string;
  title: string;
};

type IssueDetail = {
  writer: string;
  target: string;
  body: string;
  createdAt: string;
  keywordList: string[];
};
