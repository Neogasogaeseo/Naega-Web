import { teamDataMock } from '../mock/team';
import { TeamService } from './team';

export const api: APIService = getAPIMethod();

function getAPIMethod(): APIService {
  return provideMockAPIService();
}

function provideMockAPIService(): APIService {
  const teamService = teamDataMock();

  return { teamService };
}

export interface APIService {
  teamService: TeamService;
}
