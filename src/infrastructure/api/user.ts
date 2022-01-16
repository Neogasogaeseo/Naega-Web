import { Keyword, LoginUser } from './types/user';

export interface UserService {
  getKeywords(userID: number): Promise<Keyword[]>;
  postKeyword(userID: number, content: string): Promise<Keyword>;
  getUserInfo(token: string): Promise<LoginUser>;
}
