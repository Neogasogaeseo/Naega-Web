import { Keyword } from './types/user';

export interface UserService {
  getKeywords(userID: number): Promise<Keyword[]>;
  getKeywordColors(): Promise<string[]>;
}
