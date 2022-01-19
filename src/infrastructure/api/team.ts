import {
  IssueData,
  PostFeedbackBookmarkResponse,
  TeamProfileData,
  TeamIssueData,
  TeamInfoData,
  TeamInviteData,
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
}
