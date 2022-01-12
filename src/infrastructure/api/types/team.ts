import { Keyword } from './user';

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
  teammates: TeamMember[];
  thumbnail: string;
  title: string;
};

export type TeamMember = {
  id: string;
  profileImage: string;
  profileName: string;
};

type IssueDetail = {
  writer: string;
  target: string;
  body: string;
  createdAt: string;
  keywordList: Keyword[];
};
