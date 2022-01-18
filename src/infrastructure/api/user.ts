import { Keyword } from './types/user';

export interface UserService {
  getKeywords(userID: number): Promise<Keyword[]>;
  postKeyword(userID: number, content: string): Promise<Keyword>;
}
