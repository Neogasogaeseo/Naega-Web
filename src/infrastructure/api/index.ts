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
import { headerMock } from '@infrastructure/mock/header';
import { HeaderService } from './header';
import { teamDataMock } from '@infrastructure/mock/team';

export const api: APIService = getAPIMethod();

function getAPIMethod(): APIService {
  return provideMockAPIService();
}

function provideMockAPIService(): APIService {
  const teamService = teamDataRemote();
  const teamServiceMock = teamDataMock();
  const userService = userDataRemote();
  const loginUserService = loginUserRemote();
  const neogaService = NeogaDataRemote();
  const neososeoFormService = NeososeoFormRemote();
  const headerService = headerMock();

  return {
    teamService,
    userService,
    neogaService,
    neososeoFormService,
    loginUserService,
    headerService,
    teamServiceMock,
  };
}

export interface APIService {
  teamService: TeamService;
  userService: UserService;
  loginUserService: LoginUserService;
  neogaService: NeogaService;
  neososeoFormService: NeososeoFormService;
  headerService: HeaderService;
  teamServiceMock: TeamService;
}
