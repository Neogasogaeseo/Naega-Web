import { teamDataMock } from '../mock/team';
import { userDataMock } from '../mock/user';
import { TeamService } from './team';
import { UserService } from './user';

export const api: APIService = getAPIMethod();

function getAPIMethod(): APIService {
  return provideMockAPIService();
}

function provideMockAPIService(): APIService {
  const teamService = teamDataMock();
  const userService = userDataMock();

  return { teamService, userService };
}

export interface APIService {
  teamService: TeamService;
  userService: UserService;
}
