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
  teammates: Teammate[];
  thumbnail: string;
  title: string;
};

type Teammate = {
  id: number;
  profileImage: string;
  profileName: string;
};

export type IssueDetail = {
  id: string;
  writer: string;
  target: string;
  body: string;
  createdAt: string;
  keywordList: Keyword[];
  isMine: boolean;
  isBookmarked: boolean;
};
