import { TeamService } from '@api/team';
import { TEAM_DATA } from './team.data';

export function teamDataMock(): TeamService {
  const getIssueInfo = async () => {
    await wait(2000);
    return TEAM_DATA.ISSUE_INFO;
  };

  return { getIssueInfo };
}

const wait = (milliSeconds: number) => new Promise((resolve) => setTimeout(resolve, milliSeconds));
