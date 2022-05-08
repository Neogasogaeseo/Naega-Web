import { FeedbackDetail, TeamMemberNoneId } from './team';

export interface Keyword {
  id: string;
  content: string;
  color: string;
  fontColor: string;
  count?: number;
}

export interface MyKeywordInfo {
  totalCount: number;
  keywordList: Keyword[];
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
  formId?: number;
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
  name: string;
  image: string;
}

export interface FormDetail {
  formId: number;
  title: string;
  darkIconImage: string;
}

export interface MyAnswerInfo {
  formList: FormDetail[];
  answerList: AnswerDetail[];
}

export interface MyFeedbackInfo {
  teamList: TeamMemberNoneId[];
  feedbackList: FeedbackDetail[];
}
