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
  isJoined: boolean;
  accessToken: string;
  refreshToken: string;
  user: User;
}

export interface User {
  id: number;
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
  keywordCount: number;
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
  targetUserID?: number;
}

export interface EditProfileInfo {
  isSuccess: boolean;
  profileId: string;
  name: string;
  image: string;
}

export interface MyDetail {
  id: number;
  title?: string;
  profileImage?: string;
}

export interface MyFormInfo {
  formList: MyDetail[];
}

export interface MyAnswerInfo {
  answerList: AnswerDetail[];
}

export interface MyTeamInfo {
  teamList: MyDetail[];
}

export interface MyFeedbackInfo {
  feedbackList: FeedbackDetail[];
}
