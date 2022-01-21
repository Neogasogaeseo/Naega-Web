import { TeamService } from '@api/team';
import { PostFeedbackRequestBody } from '@api/types/team';
import { imgEmptyProfile } from '@assets/images';
import { AxiosError } from 'axios';
import { privateAPI } from './base';

export function teamDataRemote(): TeamService {
  const postFeedbackBookmark = async (feedbackID: string) => {
    const response = await privateAPI.put({ url: `/team/feedback/${feedbackID}/pin` });
    if (response.status === 200) return { isSuccess: true, isBookmarked: response.data.isPinned };
    else return { isSuccess: false };
  };

  const getTeamMembers = async (teamID: string) => {
    const response = await privateAPI.get({ url: `/team/member/${teamID}` });
    return response.data.map((member: any) => ({
      id: member.id,
      profileName: member.name,
      profileImage: member.image,
    }));
  };

  const postFeedback = async (body: PostFeedbackRequestBody) => {
    const response = await privateAPI.post({ url: `/team/feedback`, data: body });
    return {
      isSuccess: response.status === 200,
      createdFeedbackID: response.data.feecbackId,
      createdAt: response.data.createdAt,
      targetUserProfileID: response.data.taggedUserProfileId,
    };
  };

  const getIssueInfo = async (issueID: string) => {
    const issueDetailData = await privateAPI.get({ url: `/team/issue/${issueID}` });
    const issueFeedbacksData = await privateAPI.get({ url: `/team/issue/${issueID}/feedback` });
    console.log({ issueDetailData, issueFeedbacksData });
    return {
      createdAt: issueDetailData.data.createdAt,
      title: issueDetailData.data.content,
      category: issueDetailData.data.categoryName,
      team: {
        teammates: issueDetailData.data.feedbackTagged.map((member: any) => ({
          profileId: member.userId,
          id: member.userId,
          profileName: member.name,
          profileImage: member.image,
        })),
        thumbnail: issueDetailData.data.team.image,
        title: issueDetailData.data.team.name,
      },
      writer: issueDetailData.data.team.host,
      feedbackList: issueFeedbacksData.data.map((feedback: any) => ({
        id: feedback.id.toString(),
        writer: feedback.name,
        target: feedback.taggedusername,
        body: feedback.content,
        createdAt: feedback.createdAt,
        keywordList: feedback.keywords.map((keyword: any) => ({
          id: keyword.id.toString(),
          content: keyword.name,
          color: keyword.colorcode,
        })),
        targetProfileID: feedback.taggedUserId,
        isBookmarked: feedback.isPinned,
      })),
    };
  };

  const getTeamIssue = async (teamID: string) => {
    const response = await privateAPI.get({ url: `/team/detail/${teamID}/issue` });
    if (response.status === 200)
      return {
        issueListData: response.data
          ? response.data.map((team: any) => ({
              issueNumber: team.id,
              issueMembers: team.feedback
                ? team.feedback.map((member: any) => ({
                    id: member.userId,
                    profileName: member.name,
                    profileImage: member.image,
                  }))
                : [],
              category: team.categoryName,
              dates: team.createdAt,
              content: team.content,
              teamID: team.teamId,
              issueCardImage: team.image ?? null,
              teamName: team.teamName,
              memberName: team.userName,
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
              issueMembers: team.feedback
                ? team.feedback.map((member: any) => ({
                    id: member.userId,
                    profileName: member.name,
                    profileImage: member.image,
                  }))
                : [],
              category: team.categoryName,
              dates: team.createdAt,
              content: team.content,
              teamID: team.teamId,
              issueCardImage: team.image ?? null,
              teamName: team.teamName,
              memberName: team.userName,
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
              dates: team.createdAt,
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

  const getSearchedUserList = async (profileId: string) => {
    const response = await privateAPI.get({
      url: `/user/search?profileId=${profileId}`,
    });
    if (response.status === 200)
      return response.data.map((member: any) => ({
        id: member.id,
        profileId: member.profileId,
        profileName: member.name,
        profileImage: member.image,
      }));
  };

  const postTeamInfo = async (teamInfo: FormData) => {
    try {
      const response = await privateAPI
        .post({
          url: `/team`,
          data: teamInfo,
          type: 'multipart',
        })
        .catch((e: AxiosError) => {
          console.log(e.response);
        });
      if (response.status === 200) {
        console.log(response);
        return { isSuccess: true };
      } else {
        return { isSuccess: false };
      }
    } catch (e) {
      throw '데이터 전송 실패';
    }
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
    getSearchedUserList,
    getTeamMembers,
    postFeedback,
    postTeamInfo,
  };
}
