import { neogaDataMock } from '../mock/neoga';
import { teamDataMock } from '../mock/team';
import { userDataMock } from '../mock/user';
import { NeogaService } from './neoga';
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

  return { teamService, userService, neogaService };
}

export interface APIService {
  teamService: TeamService;
  userService: UserService;
  neogaService: NeogaService;
}
