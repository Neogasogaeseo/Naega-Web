import { TeamService } from '@api/team';
import { TEAM_DATA } from './team.data';

export function teamDataMock(): TeamService {
  const getIssueInfo = async () => {
    await wait(2000);
    return TEAM_DATA.ISSUE_INFO;
  };

  const postFeedbackBookmark = async () => {
    await wait(1000);
    return { isSuccess: true };
  };

  const getTeamIssue = async () => {
    await wait(2000);
    return TEAM_DATA.TEAM_ISSUE_INFO;
  };

  return { getIssueInfo, postFeedbackBookmark, getTeamIssue };
}

const wait = (milliSeconds: number) => new Promise((resolve) => setTimeout(resolve, milliSeconds));
