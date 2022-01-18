import { TeamService } from '@api/team';
import { imgEmptyProfile } from '@assets/images';
import { TEAM_DATA } from '../mock/team.data';
import { privateAPI } from './base';

export function teamDataRemote(): TeamService {
  const getIssueInfo = async () => {
    await wait(2000);
    return TEAM_DATA.ISSUE_INFO;
  };

  const getTeamIssue = async (teamID: string) => {
    const response = await privateAPI.get({ url: `/team/detail/${teamID}/issue` });
    if (response.status === 200)
      return {
        issueListData: response.data.map((team: any) => ({
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
        })),
      };
    else throw '서버 통신 실패';
  };

  const postFeedbackBookmark = async () => {
    await wait(1000);
    return { isSuccess: true };
  };

  const getTeamProfile = async () => {
    const response = await privateAPI.get({ url: `/team` });
    if (response.status === 200)
      return {
        profileListData: response.data.map((team: any) => ({
          id: team.id,
          profileImage: team.image ?? imgEmptyProfile,
          profileName: team.name,
        })),
      };
    else throw '서버 통신 실패';
  };

  const getMyIssue = async () => {
    const response = await privateAPI.get({ url: `/team/issue` });
    if (response.status === 200)
      return {
        issueListData: response.data.map((team: any) => ({
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
        })),
      };
    else throw '서버 통신 실패';
  };

  const getTeamInfo = async () => {
    await wait(2000);
    return TEAM_DATA.TEAM_DETAIL_INFO;
  };

  const getInviteInfo = async () => {
    const response = await privateAPI.get({ url: `/team/invite` });
    if (response.status === 200)
      return {
        inviteListData: response.data.map((team: any) => ({
          id: team.id,
          name: team.name,
        })),
      };
    else throw '서버 통신 실패';
  };

  return {
    postFeedbackBookmark,
    getTeamProfile,
    getMyIssue,
    getTeamIssue,
    getTeamInfo,
    getInviteInfo,
    getIssueInfo,
  };
}

const wait = (milliSeconds: number) => new Promise((resolve) => setTimeout(resolve, milliSeconds));
