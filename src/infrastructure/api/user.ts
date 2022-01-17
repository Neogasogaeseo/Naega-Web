import {
  Keyword,
  MyPageKeywords,
  NeososeoAnswerBookmark,
  TeamFeedbackBookmark,
  User,
} from './types/user';

export interface UserService {
  getKeywords(userID: number): Promise<Keyword[]>;
  postKeyword(userID: number, content: string): Promise<Keyword>;
  getUserInfo(userID: string): Promise<User>;
  getMyPageKeywords(userID: string): Promise<MyPageKeywords>;
  getNeososeoBookmark(userID: string): Promise<NeososeoAnswerBookmark>;
  getFeedbackBookmark(userID: string): Promise<TeamFeedbackBookmark>;
}
