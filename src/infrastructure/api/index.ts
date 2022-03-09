import { teamDataRemote } from '../remote/team';
import { NeogaDataRemote } from '../remote/neoga';
import { LoginUserService } from './login-user';
import { NeogaService } from './neoga';
import { NeososeoFormService } from './neososeo-form';
import { TeamService } from './team';
import { UserService } from './user';
import { loginUserRemote } from '@infrastructure/remote/login-user';
import { userDataRemote } from '@infrastructure/remote/user';
import { NeososeoFormRemote } from '@infrastructure/remote/neososeo-form';

export const api: APIService = getAPIMethod();

function getAPIMethod(): APIService {
  return provideMockAPIService();
}

function provideMockAPIService(): APIService {
  const teamService = teamDataRemote();
  const userService = userDataRemote();
  const loginUserService = loginUserRemote();
  const neogaService = NeogaDataRemote();
  const neososeoFormService = NeososeoFormRemote();

  return { teamService, userService, neogaService, neososeoFormService, loginUserService };
}

export interface APIService {
  teamService: TeamService;
  userService: UserService;
  loginUserService: LoginUserService;
  neogaService: NeogaService;
  neososeoFormService: NeososeoFormService;
}
