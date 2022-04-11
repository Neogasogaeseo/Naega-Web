import { AxiosError } from 'axios';
import { TeamService } from '@api/team';
import { PostFeedbackRequestBody, TeamEditInfo } from '@api/types/team';
import { STATUS_CODE } from '@utils/constant';
import { getTimeDifference } from '@utils/date';
import { privateAPI } from './base';

export function teamDataRemote(): TeamService {
  const postFeedbackBookmark = async (feedbackID: string) => {
    const response = await privateAPI.put({ url: `/team/feedback/${feedbackID}/pin` });
    if (response.status === STATUS_CODE.OK)
      return { isSuccess: true, isBookmarked: response.data?.isPinned };
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
      isSuccess: response.status === STATUS_CODE.OK,
      createdFeedbackID: response.data.feecbackId,
      createdAt: response.data.createdAt,
      targetUserProfileID: response.data.taggedUserProfileId,
    };
  };

  const getIssueInfo = async (issueID: string) => {
    const issueDetailData = await privateAPI.get({ url: `/team/issue/${issueID}` });
    const issueFeedbacksData = await privateAPI.get({ url: `/team/issue/${issueID}/feedback` });
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
        thumbnail: issueDetailData.data.image,
        title: issueDetailData.data.team.name,
        teamProfileImage: issueDetailData.data.team.image,
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
    if (response.status === STATUS_CODE.OK)
      return {
        issueList: response.data
          ? response.data.map((issue: any) => ({
              issueNumber: issue.id,
              issueCardImage: issue.image ?? null,
              category: issue.categoryName,
              dates: issue.createdAt,
              content: issue.content,
              issueMembers: issue.feedback
                ? issue.feedback.map((member: any) => ({
                    id: member.id,
                    profileName: member.name,
                    profileImage: member.image,
                  }))
                : [],
              teamID: issue.team.id,
              teamName: issue.team.name,
              teamImage: issue.team.image,
              memberName: issue.team.userName,
            }))
          : [],
      };
    else throw '서버 통신 실패';
  };

  const getMyIssue = async (teamID: string) => {
    const response = await privateAPI.get({ url: `/team/detail/${teamID}/issue/my` });
    if (response.status === STATUS_CODE.OK)
      return {
        issueList: response.data
          ? response.data.map((issue: any) => ({
              issueNumber: issue.id,
              issueCardImage: issue.image ?? null,
              category: issue.categoryName,
              dates: issue.createdAt,
              content: issue.content,
              issueMembers: issue.feedback
                ? issue.feedback.map((member: any) => ({
                    id: member.id,
                    profileName: member.name,
                    profileImage: member.image,
                  }))
                : [],
              teamID: issue.team.id,
              teamName: issue.team.name,
              teamImage: issue.team.image,
              memberName: issue.team.userName,
            }))
          : [],
      };
    else throw '서버 통신 실패';
  };

  const getTeamProfile = async () => {
    const response = await privateAPI.get({ url: `/team` });
    if (response.status === STATUS_CODE.OK)
      return {
        profileList: response.data
          ? response.data.map((team: any) => ({
              id: team.id,
              profileImage: team.image,
              profileName: team.name,
            }))
          : [],
      };
    else throw '서버 통신 실패';
  };

  const getTeamInfo = async (teamID: number) => {
    const response = await privateAPI.get({ url: `/team/detail/${teamID}` });
    if (response.status === STATUS_CODE.OK)
      return {
        teamDetail: {
          teamID: response.data.team.id,
          teamImage: response.data.team.image,
          teamName: response.data.team.name,
          teamDescription: response.data.team.description,
        },
        teamMemberCount: response.data.memberCount,
        teamMemberList: response.data.member.map((memberDetail: any) => ({
          id: memberDetail.id,
          profileId: memberDetail.profileId,
          profileName: memberDetail.name,
          profileImage: memberDetail.image,
          isHost: memberDetail.isHost,
        })),
      };
    else throw 'NOT FOUND';
  };

  const getMyTeamIssue = async () => {
    const response = await privateAPI.get({ url: `/team/issue` });
    if (response.status === STATUS_CODE.OK)
      return {
        issueList: response.data
          ? response.data.map((issue: any) => ({
              issueNumber: issue.id,
              issueCardImage: issue.image ?? null,
              category: issue.categoryName,
              dates: issue.createdAt,
              content: issue.content,
              issueMembers: issue.feedback.map((member: any) => ({
                id: member.id,
                profileName: member.name,
                profileImage: member.image,
              })),
              teamID: issue.team.id,
              teamName: issue.team.name,
              teamImage: issue.team.image,
              memberName: issue.team.userName,
            }))
          : [],
      };
    else throw '서버 통신 실패';
  };

  const getInviteInfo = async () => {
    const response = await privateAPI.get({ url: `/team/invite` });
    if (response.status === STATUS_CODE.OK)
      return {
        inviteList: response.data
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
    if (response.status === STATUS_CODE.OK)
      return response.data.map((member: any) => ({
        id: member.id,
        profileId: member.profileId,
        profileName: member.name,
        profileImage: member.image,
      }));
    else if (response.axiosStatus === STATUS_CODE.NO_CONTENT) {
      return [];
    }
  };

  const postTeamInfo = async (teamInfo: FormData) => {
    try {
      const response = await privateAPI
        .post({
          url: `/team`,
          data: teamInfo,
          type: 'multipart',
        })
        .catch((error: AxiosError) => {
          console.error(error.response);
        });
      if (response.status === STATUS_CODE.OK) {
        return { isSuccess: true };
      } else {
        return { isSuccess: false };
      }
    } catch (e) {
      throw '데이터 전송 실패';
    }
  };

  const getTeamIssueCategory = async () => {
    const response = await privateAPI.get({ url: `/team/issue/category` });
    return response.data;
  };

  const postTeamIssue = async (
    teamID: string,
    content: string,
    categoryID: number,
    image?: File,
  ) => {
    try {
      const formData = new FormData();
      formData.append('teamId', teamID);
      formData.append('categoryId', categoryID.toString());
      formData.append('content', content);
      image && formData.append('image', image);
      const response = await privateAPI
        .post({
          url: `/team/issue`,
          data: formData,
          type: 'multipart',
        })
        .catch((error) => {
          console.error(error.response);
        });
      return response.data;
    } catch (e) {
      throw '데이터 전송 실패';
    }
  };

  const getTeamEditInfo = async (teamID: number) =>
    new Promise<TeamEditInfo>((resolve) => setTimeout(resolve, teamID));

  const acceptInvitation = async (id: number) => {
    const response = await privateAPI.put({ url: `/team/invite/accept`, data: { teamId: id } });
    return { isSuccess: response.success };
  };

  const rejectInvitation = async (id: number) => {
    const response = await privateAPI.put({ url: `/team/invite/reject`, data: { teamId: id } });
    return { isSuccess: response.success };
  };

  const getNotice = async () => {
    const response = await privateAPI.get({ url: '/user/notice?offset=0&limit=40' });
    return response.data.notice.map((notice: any) => {
      const invitationUpdatedTime = new Date(notice.invitation.updatedAt);
      const now = new Date(Date.now());
      const timeDifference = getTimeDifference(invitationUpdatedTime, now);
      return {
        teamID: notice.team.id,
        teamName: notice.team.name,
        teamProfileImage: notice.team.image,
        status: notice.invitation.isConfirmed
          ? 'ACCEPT'
          : notice.invitation.isDeleted
          ? 'DECLINE'
          : 'PENDING',
        timeDifference,
      };
    });
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
    getTeamIssueCategory,
    postTeamIssue,
    getTeamEditInfo,
    acceptInvitation,
    rejectInvitation,
    getNotice,
  };
}
