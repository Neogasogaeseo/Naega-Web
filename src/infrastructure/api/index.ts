import { neogaDataMock } from '../mock/neoga';
import { neososeoFormDataMock } from '../mock/neososeo-form';
import { teamDataMock } from '../mock/team';
import { userDataMock } from '../mock/user';
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
  const neogaService = neogaDataMock();
  const neososeoFormService = neososeoFormDataMock();

  return { teamService, userService, neogaService, neososeoFormService };
}

export interface APIService {
  teamService: TeamService;
  userService: UserService;
  neogaService: NeogaService;
  neososeoFormService: NeososeoFormService;
}
