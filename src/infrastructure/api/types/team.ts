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
  id: number;
  profileId: string;
  profileImage?: string;
  profileName: string;
}

export type TeamMemberNoneId = Omit<TeamMember, 'profileId'>;

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

export type TeamIssueData = {
  issueListData: TeamIssueCard[];
};

export type TeamIssueCard = {
  teamID: string;
  issueNumber: number;
  issueCardImage?: string;
  category: string;
  dates: string;
  content: string;
  issueMembers: TeamMemberNoneId[];
  teamImage?: string;
  teamName: string;
  memberName: string;
};

export type TeamProfileData = {
  profileListData: TeamMemberNoneId[];
};

export type TeamInfoData = {
  teamID: string;
  teamImage?: string;
  teamName: string;
  teamDescription: string;
  teamMemberList: TeamMemberNoneId[];
};

export type TeamInvite = {
  id: number;
  name: string;
};

export type TeamInviteData = {
  inviteListData: TeamInvite[];
};
