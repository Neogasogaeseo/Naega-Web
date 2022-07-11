import {
  IssueData,
  PostFeedbackBookmarkResponse,
  TeamProfileData,
  TeamIssueData,
  TeamInfoData,
  TeamInviteData,
  TeamMemberNoneId,
  PostFeedbackRequestBody,
  PostFeedbackResponse,
  IssueCategory,
  PostIssueResponse,
  TeamEditInfo,
  ImageFile,
  TeamNoticeItem,
  SearchedUserResponse,
  TeamEditMember,
  SearchedUserResponseForEdit,
  FeedbackEditInfo,
} from './types/team';

export interface TeamService {
  getIssueInfo(issueID: string): Promise<IssueData>;
  postFeedbackBookmark(feedbackID: string): Promise<PostFeedbackBookmarkResponse>;
  getTeamProfile(): Promise<TeamProfileData>;
  getMyTeamIssue(): Promise<TeamIssueData>;
  getTeamInfo(teamID: number): Promise<TeamInfoData | undefined>;
  getTeamIssue(teamID: string): Promise<TeamIssueData>;
  getMyIssue(teamID: string): Promise<TeamIssueData>;
  getInviteInfo(): Promise<TeamInviteData>;
  getSearchedUserListForRegister(searchID: string, page: number): Promise<SearchedUserResponse[]>;
  getSearchedUserListForEdit(
    teamID: number,
    searchID: string,
    page: number,
  ): Promise<SearchedUserResponseForEdit[]>;
  getTeamMembers(teamID: string): Promise<TeamMemberNoneId[]>;
  postFeedback(body: PostFeedbackRequestBody): Promise<PostFeedbackResponse>;
  postTeamInfo(teamInfo: FormData): Promise<{ isSuccess: boolean; id: number; image: string }>;
  getTeamIssueCategory(): Promise<IssueCategory[]>;
  postTeamIssue(
    teamID: string,
    content: string,
    categoryID: number,
    image: File | null | undefined,
  ): Promise<PostIssueResponse>;
  getTeamEditInfo(teamID: number): Promise<TeamEditInfo<string>>;
  acceptInvitation(teamID: number): Promise<{ isSuccess: boolean }>;
  rejectInvitation(teamID: number): Promise<{ isSuccess: boolean }>;
  editTeamInfo(teamInfo: TeamEditInfo<ImageFile>): Promise<{ isSuccess: boolean }>;
  deleteTeam(teamID: number): Promise<{ isSuccess: boolean }>;
  getNotice(page: number): Promise<TeamNoticeItem[]>;
  getTeamEditMember(teamID: number): Promise<TeamEditMember[]>;
  deleteFeedback(feedbackID: number): Promise<{ isSuccess: boolean }>;
  deleteIssue(issueID: number): Promise<{ isSuccess: boolean }>;
  editTeamMember(teamID: number, newUserIdList: string): Promise<{ isSuccess: boolean }>;
  editIssue(
    issueID: number,
    categoryID: number,
    content: string,
    image: File | null | undefined,
  ): Promise<{ isSuccess: boolean; image: string | null }>;
  leaveTeam(teamID: number): Promise<{ isSuccess: boolean }>;
  delegateHost(teamID: number, newHostID: number): Promise<{ isSuccess: boolean }>;
  editFeedback(
    feedback: Omit<FeedbackEditInfo, 'target' | 'targetProfileImage'>,
  ): Promise<{ isSuccess: boolean }>;
}
