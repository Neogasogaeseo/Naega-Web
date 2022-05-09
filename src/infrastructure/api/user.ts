import {
  EditProfileInfo,
  Keyword,
  MyKeywordInfo,
  MyPageInfo,
  NeososeoAnswerBookmark,
  TeamFeedbackBookmark,
  MyAnswerInfo,
  MyFeedbackInfo,
} from './types/user';

export interface UserService {
  getKeywords(userID: number, page: number): Promise<Keyword[]>;
  postKeyword(userID: number, content: string): Promise<Keyword>;
  getMyPageInfo(userID: string): Promise<MyPageInfo>;
  getNeososeoBookmark(userID: string): Promise<NeososeoAnswerBookmark>;
  getFeedbackBookmark(userID: string): Promise<TeamFeedbackBookmark>;
  getDuplicationCheck(userID: string): Promise<{ isSuccess: boolean }>;
  editUserProfile(formData: FormData): Promise<EditProfileInfo>;
  getMyKeywordList(page: number): Promise<MyKeywordInfo>;
  deleteMyKeyword(keywordID: number): Promise<{ isSuccess: boolean }>;
  getMyAnswerInfo(page: number, formID?: number): Promise<MyAnswerInfo>;
  getMyFeedbackInfo(page: number, teamID?: number): Promise<MyFeedbackInfo>;
}
