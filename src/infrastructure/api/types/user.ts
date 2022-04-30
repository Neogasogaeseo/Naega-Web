import { FeedbackDetail, TeamMemberNoneId } from './team';

export interface Keyword {
  id: string;
  content: string;
  color: string;
  fontColor: string;
}

export interface LoginUser {
  id: number;
  accessToken: string;
  username: string;
  userID: string;
  profileImage: string | null;
}

export interface User {
  username: string;
  userID: string;
  profileImage: string;
}

export interface TeamFeedbackBookmark {
  count: number;
  teamList: TeamMemberNoneId[];
  feedbackList: FeedbackDetail[];
}

export interface NeososeoAnswerBookmark {
  count: number;
  answerList: AnswerDetail[];
}

export interface MyPageInfo extends User {
  neososeo: Keyword[];
  team: Keyword[];
}

export interface AnswerDetail {
  id: number;
  icon: string;
  question: string;
  content: string;
  isBookmarked: boolean;
  keywordList: Keyword[];
  targetUserID: number;
}

export interface EditProfileInfo {
  isSuccess: boolean;
  profileId: string;
}
