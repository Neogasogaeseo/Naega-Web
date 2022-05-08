import { AxiosError } from 'axios';

import { ForbiddenError } from '@api/types/errors';
import { ImageFile, PostFeedbackRequestBody, TeamEditInfo } from '@api/types/team';
import { TeamService } from '@api/team';
import { NOTICE_PAGE, SEARCHED_USER_PAGE, STATUS_CODE } from '@utils/constant';
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
      createdAt: issueDetailData.data.issue.createdAt,
      title: issueDetailData.data.issue.content,
      category: issueDetailData.data.issue.categoryName,
      team: {
        teammates: issueDetailData.data.feedbackTagged.map((member: any) => ({
          profileId: member.id,
          id: member.id,
          profileName: member.name,
          profileImage: member.image,
        })),
        thumbnail: issueDetailData.data.issue.image,
        title: issueDetailData.data.team.name,
        teamProfileImage: issueDetailData.data.team.image,
      },
      writer: issueDetailData.data.user.name,
      writerID: issueDetailData.data.user.id,
      feedbackList: issueFeedbacksData.data.map((feedback: any) => ({
        id: feedback.id.toString(),
        writer: feedback.name,
        writerID: feedback.userId,
        target: feedback.taggedusername,
        body: feedback.content,
        createdAt: feedback.createdAt,
        keywordList: feedback.keywords.map((keyword: any) => ({
          id: keyword.id.toString(),
          content: keyword.name,
          color: keyword.colorcode,
          fontColor: keyword.fontcolor,
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

  const getSearchedUserList = async (searchID: string, page: number) => {
    const response = await privateAPI.get({
      url: `/user/search?searchId=${searchID}&offset=${page}&limit=${SEARCHED_USER_PAGE}`,
    });
    if (response.status === STATUS_CODE.OK)
      return response.data.user.map((member: any) => ({
        id: member.id,
        profileID: member.profileId,
        name: member.name,
        image: member.image,
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

  const getTeamEditInfo = async (teamID: number) => {
    const response = await privateAPI
      .get({ url: `/team/edit/${teamID}` })
      .catch((error: AxiosError) => {
        if (error.response?.status === STATUS_CODE.FORBIDDEN)
          throw new ForbiddenError('팀 호스트에게만 팀 수정 권한이 있습니다.');
      });
    const { data, status } = response;
    if (status === STATUS_CODE.OK) {
      const { team } = data;
      return {
        ...team,
        image: team.image ?? '',
        description: team.description ?? '',
      };
    } else new ForbiddenError('팀 호스트에게만 팀 수정 권한이 있습니다.');
  };

  const acceptInvitation = async (id: number) => {
    const response = await privateAPI.put({ url: `/team/invite/accept`, data: { teamId: id } });
    return { isSuccess: response.success };
  };

  const rejectInvitation = async (id: number) => {
    const response = await privateAPI.put({ url: `/team/invite/reject`, data: { teamId: id } });
    return { isSuccess: response.success };
  };

  const editTeamInfo = async (teamInfo: TeamEditInfo<ImageFile>) => {
    const { id, name, description, image } = teamInfo;
    const formData = new FormData();
    formData.append('teamId', id.toString());
    formData.append('teamName', name);
    formData.append('image', image ?? '');
    formData.append('description', description);
    const response = await privateAPI.put({
      url: '/team/edit',
      data: formData,
      type: 'multipart',
    });
    return { isSuccess: response.success };
  };

  const deleteTeam = async (teamID: number) => {
    const response = await privateAPI.delete({ url: '/team', data: { teamId: teamID } });
    return { isSuccess: response.success };
  };

  const getNotice = async (page: number) => {
    const response = await privateAPI.get({
      url: `/user/notice?offset=${page}&limit=${NOTICE_PAGE}`,
    });
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

  const getTeamEditMember = async (teamID: number) => {
    const response = await privateAPI
      .get({ url: `/team/edit/member/${teamID}` })
      .catch((error: AxiosError) => {
        if (error.response?.status === STATUS_CODE.FORBIDDEN)
          throw new ForbiddenError('팀 호스트에게만 팀 수정 권한이 있습니다.');
      });
    if (response.status === STATUS_CODE.OK) {
      const { member: memberList } = response.data;
      return memberList.map((member: any) => {
        const { id, name, profileId: profileID, image, isConfirmed } = member;
        return { id, name, profileID, image, isConfirmed };
      });
    }
  };

  const deleteFeedback = async (feedbackID: number) => {
    const response = await privateAPI.delete({ url: `/team/feedback/${feedbackID}` });
    return { isSuccess: response.success };
  };

  const deleteIssue = async (issueID: number) => {
    const response = await privateAPI.delete({ url: `/team/issue/${issueID}` });
    return { isSuccess: response.success };
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
    editTeamInfo,
    deleteTeam,
    getNotice,
    getTeamEditMember,
    deleteFeedback,
    deleteIssue,
  };
}
