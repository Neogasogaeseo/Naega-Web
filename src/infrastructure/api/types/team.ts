import { Keyword } from './user';

export type IssueData = {
  createdAt: string;
  title: string;
  category: string;
  team: TeamData;
  feedbackList: FeedbackDetail[];
  writer: string;
  writerID: number;
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

export interface TeamMemberWithHostInfo extends TeamMember {
  isHost: boolean;
}

export interface SearchedUserResponse {
  id: number;
  profileID: string;
  name: string;
  image: string;
}

export interface SearchedUserResponseForEdit extends SearchedUserResponse {
  isConfirmed: boolean | null;
}

export interface SearchedUserForRegister extends SearchedUserResponse {
  isSelected: boolean;
}

export type UserState = 'NONE' | 'MEMBER' | 'INVITED' | 'WILL_INVITE';
export interface SearchedUserForEdit extends SearchedUserResponse {
  state: UserState;
}

export const isForRegister = (
  user: SearchedUserForRegister | SearchedUserForEdit,
): user is SearchedUserForRegister => {
  return 'isSelected' in user;
};

export const isForEdit = (
  user: SearchedUserForRegister | SearchedUserForEdit,
): user is SearchedUserForEdit => {
  return 'state' in user;
};

export type FeedbackDetail = {
  id: string;
  writer: string;
  writerID?: string;
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
  teamMemberList: TeamMemberWithHostInfo[];
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

export type ImageFile = File | null;
export interface TeamEditInfo<T extends ImageFile | string> {
  id: number;
  image: T;
  name: string;
  description: string;
}

export type TeamNoticeItem = {
  teamID: number;
  teamName: string;
  teamProfileImage: string | undefined;
  status: TeamNoticeStatus;
  timeDifference: string;
};

export enum TeamNoticeStatus {
  PENDING = 'PENDING',
  ACCEPT = 'ACCEPT',
  DECLINE = 'DECLINE',
}

export type TeamEditMember = {
  id: number;
  name: string;
  profileID: string;
  image: string | null;
  isConfirmed: boolean;
};

export type TeamNoticePaginateItems = {
  pages:
    | {
        result: TeamNoticeItem[];
        nextPage?: number | undefined;
        isLast: boolean;
      }[]
    | undefined;
};
