import { Keyword } from './user';

export type IssueData = {
  createdAt: string;
  title: string;
  category: string;
  team: TeamData;
  issueList: FeedbackDetail[];
  writer: string;
  thumbnail?: string;
};

type TeamData = {
  teammates: TeamMember[];
  thumbnail: string;
  title: string;
};

export interface TeamMember {
  id: string;
  profileImage?: string;
  profileName: string;
}

export interface SearchedMember extends TeamMember {
  isAdded: boolean;
}

export type FeedbackDetail = {
  id: string;
  writer: string;
  target: string;
  body: string;
  createdAt: string;
  keywordList: Keyword[];
  isMine: boolean;
  isBookmarked: boolean;
};

export type PostFeedbackBookmarkResponse = {
  isSuccess: boolean;
};
