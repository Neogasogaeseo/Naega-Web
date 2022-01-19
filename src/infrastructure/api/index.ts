import { loginUserMock } from '../mock/login-user';
import { userDataMock } from '../mock/user';
import { teamDataRemote } from '../remote/team';
import { NeogaDataRemote } from '../remote/neoga';
import { LoginUserService } from './login-user';
import { NeogaService } from './neoga';
import { NeososeoFormService } from './neososeo-form';
import { TeamService } from './team';
import { UserService } from './user';
import { neososeoFormDataRemote } from '@infrastructure/remote/neososeo-form';

export const api: APIService = getAPIMethod();

function getAPIMethod(): APIService {
  return provideMockAPIService();
}

function provideMockAPIService(): APIService {
  const teamService = teamDataRemote();
  const userService = userDataMock();
  const loginUserService = loginUserMock();
  const neogaService = NeogaDataRemote();
  const neososeoFormService = neososeoFormDataRemote();

  return { teamService, userService, neogaService, neososeoFormService, loginUserService };
}

export interface APIService {
  teamService: TeamService;
  userService: UserService;
  loginUserService: LoginUserService;
  neogaService: NeogaService;
  neososeoFormService: NeososeoFormService;
}
