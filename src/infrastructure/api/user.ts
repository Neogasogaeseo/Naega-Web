import { EditProfileInfo, Keyword, MyPageInfo, NeososeoAnswerBookmark, TeamFeedbackBookmark } from './types/user';

export interface UserService {
  getKeywords(userID: number, page: number): Promise<Keyword[]>;
  postKeyword(userID: number, content: string): Promise<Keyword>;
  getMyPageInfo(userID: string): Promise<MyPageInfo>;
  getNeososeoBookmark(userID: string): Promise<NeososeoAnswerBookmark>;
  getFeedbackBookmark(userID: string): Promise<TeamFeedbackBookmark>;
  getDuplicationCheck(userID: string): Promise<{ isSuccess: boolean }>;
  editUserProfile(formData: FormData): Promise<EditProfileInfo>;
}
