import { Keyword, LoginUser } from './types/user';

export interface UserService {
  getKeywords(userID: number): Promise<Keyword[]>;
  getKeywordColors(): Promise<string[]>;
  getUserInfo(token: string): Promise<LoginUser>;
}
