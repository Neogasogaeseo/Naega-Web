import { TeamService } from '@api/team';
import { imgEmptyProfile } from '@assets/images';
import { TEAM_DATA } from '../mock/team.data';
import { privateAPI } from './base';

export function teamDataRemote(): TeamService {
  const postFeedbackBookmark = async () => {
    await wait(1000);
    return { isSuccess: true };
  };

  const getIssueInfo = async () => {
    await wait(2000);
    return TEAM_DATA.ISSUE_INFO;
  };

  const getTeamIssue = async (teamID: string) => {
    const response = await privateAPI.get({ url: `/team/detail/${teamID}/issue` });
    if (response.status === 200)
      return {
        issueListData: response.data
          ? response.data.map((team: any) => ({
              issueNumber: team.id,
              issueMembers: team.feedback.map((member: any) => ({
                id: member.userId,
                profileName: member.name,
                profileImage: member.image,
              })),
              category: team.categoryName,
              createdAt: team.dates,
              content: team.content,
              teamID: team.teamId,
              issueCardImage: team.teamImage,
              teamName: team.teamname,
              memberName: team.username,
            }))
          : [],
      };
    else throw '서버 통신 실패';
  };

  const getMyIssue = async (teamID: string) => {
    const response = await privateAPI.get({ url: `/team/detail/${teamID}/issue/my` });
    if (response.status === 200)
      return {
        issueListData: response.data
          ? response.data.map((team: any) => ({
              issueNumber: team.id,
              issueMembers: team.feedback.map((member: any) => ({
                id: member.userId,
                profileName: member.name,
                profileImage: member.image,
              })),
              category: team.categoryName,
              createdAt: team.dates,
              content: team.content,
              teamID: team.teamId,
              issueCardImage: team.teamImage,
              teamName: team.teamname,
              memberName: team.username,
            }))
          : [],
      };
    else throw '서버 통신 실패';
  };

  const getTeamProfile = async () => {
    const response = await privateAPI.get({ url: `/team` });
    if (response.status === 200)
      return {
        profileListData: response.data
          ? response.data.map((team: any) => ({
              id: team.id,
              profileImage: team.image ?? imgEmptyProfile,
              profileName: team.name,
            }))
          : [],
      };
    else throw '서버 통신 실패';
  };

  const getTeamInfo = async (teamID: number) => {
    const response = await privateAPI.get({ url: `/team/detail/${teamID}` });
    if (response.status === 200)
      return {
        teamDetailData: {
          teamDetail: {
            teamID: response.data.team.id,
            teamImage: response.data.team.image ?? imgEmptyProfile,
            teamName: response.data.team.name,
            teamDescription: response.data.team.description,
          },
          teamMemberCount: response.data.memberCount,
          teamMemberList: response.data.member.map((memberDetail: any) => ({
            id: memberDetail.id,
            profileName: memberDetail.name,
            profileImage: memberDetail.image ?? imgEmptyProfile,
          })),
        },
      };
  };

  const getMyTeamIssue = async () => {
    const response = await privateAPI.get({ url: `/team/issue` });
    if (response.status === 200)
      return {
        issueListData: response.data
          ? response.data.map((team: any) => ({
              teamID: team.teamId,
              issueNumber: team.id,
              issueMembers: team.feedback.map((member: any) => ({
                id: member.userId,
                profileName: member.name,
                profileImage: member.image,
              })),
              category: team.categoryName,
              createdAt: team.createdAt,
              content: team.content,
              teamName: team.teamName,
              memberName: team.userName,
            }))
          : [],
      };
    else throw '서버 통신 실패';
  };

  const getInviteInfo = async () => {
    const response = await privateAPI.get({ url: `/team/invite` });
    if (response.status === 200)
      return {
        inviteListData: response.data
          ? response.data.map((team: any) => ({
              id: team.id,
              name: team.name,
            }))
          : [],
      };
    else throw '서버 통신 실패';
  };

  return {
    postFeedbackBookmark,
    getTeamProfile,
    getTeamInfo,
    getMyTeamIssue,
    getTeamIssue,
    getMyIssue,
    getInviteInfo,
    getIssueInfo,
  };
}

const wait = (milliSeconds: number) => new Promise((resolve) => setTimeout(resolve, milliSeconds));
