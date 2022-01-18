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

  const getTeamProfile = async () => {
    await wait(2000);
    return TEAM_DATA.TEAM_PROFILE;
  };

  const getMyTeamIssue = async () => {
    await wait(2000);
    return TEAM_DATA.TEAM_ISSUE_INFO;
  };

  const getTeamIssue = async () => {
    await wait(2000);
    return TEAM_DATA.TEAM_ISSUE_INFO;
  };

  const getMyIssue = async () => {
    await wait(2000);
    return TEAM_DATA.TEAM_ISSUE_INFO;
  };

  const getInviteInfo = async () => {
    await wait(2000);
    return TEAM_DATA.TEAM_INVITE_INFO;
  };

  return {
    getIssueInfo,
    postFeedbackBookmark,
    getTeamProfile,
    getMyTeamIssue,
    getTeamIssue,
    getMyIssue,
    getInviteInfo,
  };
}

const wait = (milliSeconds: number) => new Promise((resolve) => setTimeout(resolve, milliSeconds));
