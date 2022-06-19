import {
  EditProfileInfo,
  Keyword,
  MyKeywordInfo,
  MyPageInfo,
  NeososeoAnswerBookmark,
  TeamFeedbackBookmark,
  MyAnswerInfo,
  MyFeedbackInfo,
  MyFormInfo,
  MyTeamInfo,
} from './types/user';

export interface UserService {
  getKeywords(userID: number, page: number): Promise<Keyword[]>;
  postKeyword(userID: number, content: string): Promise<Keyword>;
  undoPostKeyword(keywordID: string): Promise<{ isSuccess: boolean }>;
  getMyPageInfo(userID: string): Promise<MyPageInfo>;
  getNeososeoBookmark(userID: string): Promise<NeososeoAnswerBookmark>;
  getFeedbackBookmark(userID: string): Promise<TeamFeedbackBookmark>;
  getDuplicationCheck(userID: string): Promise<{ isDuplicate: boolean }>;
  editUserProfile(formData: FormData): Promise<EditProfileInfo>;
  getMyKeywordList(page: number): Promise<MyKeywordInfo>;
  deleteMyKeyword(keywordID: number): Promise<{ isSuccess: boolean }>;
  getMyFormInfo(): Promise<MyFormInfo>;
  getMyAnswerInfo(page: number, formID?: number): Promise<MyAnswerInfo>;
  getMyTeamInfo(): Promise<MyTeamInfo>;
  getMyFeedbackInfo(page: number, teamID?: number): Promise<MyFeedbackInfo>;
  postWithdraw(): Promise<{ isSuccess: boolean }>;
}
