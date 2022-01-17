import { LoginUser } from './types/user';

export interface LoginUserService {
  getUserInfo(token: string): Promise<LoginUser>;
}
