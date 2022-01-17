import { loginUserMock } from '../mock/login-user';
import { neososeoFormDataMock } from '../mock/neososeo-form';
import { teamDataMock } from '../mock/team';
import { userDataMock } from '../mock/user';
import { NeogaDataRemote } from '../remote/neoga';
import { LoginUserService } from './login-user';
import { NeogaService } from './neoga';
import { NeososeoFormService } from './neososeo-form';
import { TeamService } from './team';
import { UserService } from './user';

export const api: APIService = getAPIMethod();

function getAPIMethod(): APIService {
  return provideMockAPIService();
}

function provideMockAPIService(): APIService {
  const teamService = teamDataMock();
  const userService = userDataMock();
  const loginUserService = loginUserMock();
  const neogaService = NeogaDataRemote();
  const neososeoFormService = neososeoFormDataMock();

  return { teamService, userService, neogaService, neososeoFormService, loginUserService };
}

export interface APIService {
  teamService: TeamService;
  userService: UserService;
  loginUserService: LoginUserService;
  neogaService: NeogaService;
  neososeoFormService: NeososeoFormService;
}
