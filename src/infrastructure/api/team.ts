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
  getSearchedUserList(searchID: string, page: number): Promise<SearchedUserResponse[]>;
  getTeamMembers(teamID: string): Promise<TeamMemberNoneId[]>;
  postFeedback(body: PostFeedbackRequestBody): Promise<PostFeedbackResponse>;
  postTeamInfo(teamInfo: FormData): Promise<{ isSuccess: boolean }>;
  getTeamIssueCategory(): Promise<IssueCategory[]>;
  postTeamIssue(
    teamID: string,
    content: string,
    categoryID: number,
    image?: File,
  ): Promise<PostIssueResponse>;
  getTeamEditInfo(teamID: number): Promise<TeamEditInfo<string>>;
  acceptInvitation(teamID: number): Promise<{ isSuccess: boolean }>;
  rejectInvitation(teamID: number): Promise<{ isSuccess: boolean }>;
  editTeamInfo(teamInfo: TeamEditInfo<ImageFile>): Promise<{ isSuccess: boolean }>;
  deleteTeam(teamID: number): Promise<{ isSuccess: boolean }>;
  getNotice(): Promise<TeamNoticeItem[]>;
  deleteFeedback(feedbackID: number): Promise<{ isSuccess: boolean }>;
  deleteIssue(issueID: number): Promise<{ isSuccess: boolean }>;
}
