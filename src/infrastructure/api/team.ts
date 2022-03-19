import {
  IssueData,
  PostFeedbackBookmarkResponse,
  TeamProfileData,
  TeamIssueData,
  TeamInfoData,
  TeamInviteData,
  TeamMember,
  TeamMemberNoneId,
  PostFeedbackRequestBody,
  PostFeedbackResponse,
  IssueCategory,
  PostIssueResponse,
  TeamEditInfo,
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
  getSearchedUserList(profileId: string): Promise<TeamMember[]>;
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
  getTeamEditInfo(teamID: number): Promise<TeamEditInfo>;
}
