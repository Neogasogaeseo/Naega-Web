import { LoginUser, User } from './types/user';

export interface LoginUserService {
  getUserInfo(token: string): Promise<User>;
  postLogin(authorizationCode: string): Promise<LoginUser>;
  postUserInfo(userInfo: FormData): Promise<LoginUser | null>;
}
