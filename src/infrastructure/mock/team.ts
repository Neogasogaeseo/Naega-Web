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

  const getSearchedUserListForRegister = async () => {
    await wait(2000);
    return [];
  };

  const getSearchedUserListForEdit = async () => {
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
    { id: 1, name: '협업' },
    { id: 2, name: '팀문화' },
    { id: 3, name: '업무 능력' },
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

  const getTeamEditInfo = async (teamID: number) => {
    await wait(teamID);
    return {
      id: -1,
      image:
        'https://user-images.githubusercontent.com/73823388/159130486-5d4eb6f7-9f72-4c27-9807-6c762d352a9a.jpg',
      name: '당뻔',
      description: '당당하고 뻔뻔하게 번개를 열어부러',
    };
  };

  const acceptInvitation = async () => {
    await wait(1000);
    return { isSuccess: true };
  };

  const rejectInvitation = async () => {
    await wait(1000);
    return { isSuccess: true };
  };

  const editTeamInfo = async () => {
    await wait(1000);
    return { isSuccess: true };
  };

  const deleteTeam = async () => {
    await wait(1000);
    return { isSuccess: true };
  };

  const getNotice = async () => {
    return [];
  };

  const getTeamEditMember = async () => {
    return [];
  };

  const deleteFeedback = async () => {
    return { isSuccess: true };
  };

  const deleteIssue = async () => {
    return { isSuccess: true };
  };

  const editTeamMember = async () => {
    return { isSuccess: true };
  };

  const editIssue = async () => {
    return { isSuccess: true, image: null };
  };

  const leaveTeam = async () => {
    return { isSuccess: true };
  };

  const delegateHost = async () => {
    return { isSuccess: true };
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
    getSearchedUserListForRegister,
    getSearchedUserListForEdit,
    getTeamMembers,
    postFeedback,
    postTeamInfo,
    getTeamIssueCategory,
    postTeamIssue,
    getTeamEditInfo,
    acceptInvitation,
    rejectInvitation,
    editTeamInfo,
    deleteTeam,
    getNotice,
    getTeamEditMember,
    deleteFeedback,
    deleteIssue,
    editTeamMember,
    editIssue,
    leaveTeam,
    delegateHost,
  };
}

const wait = (milliSeconds: number) => new Promise((resolve) => setTimeout(resolve, milliSeconds));
