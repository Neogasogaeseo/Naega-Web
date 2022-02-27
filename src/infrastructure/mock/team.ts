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

  const getTeamInfo = async () => {
    await wait(2000);
    return TEAM_DATA.TEAM_DETAIL_INFO;
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

  const getSearchedUserList = async () => {
    await wait(2000);
    return [];
  };

  const getTeamMembers = async () => {
    await wait(2000);
    return [];
  };

  const postFeedback = async () => {
    await wait(2000);
    return {
      isSuccess: true,
      createdFeedbackID: 2,
      createdAt: '2021-01-21',
      targetUserProfileID: 'suziep',
    };
  };

  const postTeamInfo = async (teamInfo: FormData) => {
    await wait(2000);
    console.log(teamInfo);
    return {
      isSuccess: true,
    };
  };

  const getTeamIssueCategory = async () => [
    { id: 1, name: '팀문화' },
    { id: 2, name: '어쩌구' },
    { id: 3, name: '저쩌구' },
    { id: 4, name: '기타' },
  ];
  const postTeamIssue = async () => {
    return {
      categoryID: 1,
      content: 'a',
      createdAt: '2022-02-24T18:24:20.799Z',
      id: 2,
      image: undefined,
    };
  };

  return {
    getIssueInfo,
    postFeedbackBookmark,
    getTeamProfile,
    getTeamInfo,
    getMyTeamIssue,
    getTeamIssue,
    getMyIssue,
    getInviteInfo,
    getSearchedUserList,
    getTeamMembers,
    postFeedback,
    postTeamInfo,
    getTeamIssueCategory,
    postTeamIssue,
  };
}

const wait = (milliSeconds: number) => new Promise((resolve) => setTimeout(resolve, milliSeconds));
