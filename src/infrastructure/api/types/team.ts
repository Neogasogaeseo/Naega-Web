import { Keyword } from './user';

export type IssueData = {
  createdAt: string;
  title: string;
  category: string;
  team: TeamData;
  feedbackList: FeedbackDetail[];
  writer: string;
  thumbnail?: string;
};

type TeamData = {
  teammates: TeamMember[];
  thumbnail: string;
  title: string;
  teamProfileImage?: string;
};

export interface TeamMember {
  id: number;
  profileId: string;
  profileImage?: string;
  profileName: string;
}

export type TeamMemberNoneId = Omit<TeamMember, 'profileId'>;

export interface SearchedUser extends TeamMember {
  isAdded: boolean;
}

export type FeedbackDetail = {
  id: string;
  writer: string;
  target: string;
  targetProfileID: string;
  body: string;
  createdAt: string;
  keywordList: Keyword[];
  isBookmarked: boolean;
};

export type PostFeedbackBookmarkResponse = {
  isSuccess: boolean;
  isBookmarked?: boolean;
};

export type TeamIssueData = {
  issueList: TeamIssueCard[];
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
  profileList: TeamMemberNoneId[];
};

export type TeamDetail = {
  teamID: number;
  teamImage?: string;
  teamName: string;
  teamDescription: string;
};

export type TeamInfoData = {
  teamDetail: TeamDetail;
  teamMemberCount: number;
  teamMemberList: TeamMember[];
};

export type TeamInvite = {
  id: number;
  name: string;
};

export type TeamInviteData = {
  inviteList: TeamInvite[];
};

export type IssueCategory = {
  id: number;
  name: string;
};

export type PostFeedbackResponse = {
  isSuccess: boolean;
  createdFeedbackID: number;
  createdAt: string;
  targetUserProfileID: string;
};

export type PostFeedbackRequestBody = {
  issueId: number;
  taggedUserId: number;
  content: string;
  keywordIds: number[];
};

export type PostIssueResponse = {
  categoryID: number;
  content: string;
  createdAt: string;
  id: number;
  image?: string;
};
