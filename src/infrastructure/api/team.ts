import {
  IssueData,
  PostFeedbackBookmarkResponse,
  TeamProfileData,
  TeamIssueData,
  TeamInfoData,
  TeamInviteData,
} from './types/team';

export interface TeamService {
  getIssueInfo(teamID: string, issueID: string): Promise<IssueData>;
  postFeedbackBookmark(feedbackID: string): Promise<PostFeedbackBookmarkResponse>;
  getTeamProfile(): Promise<TeamProfileData>;
  getMyIssue(): Promise<TeamIssueData>;
  getTeamIssue(teamID: string): Promise<TeamIssueData>;
  getTeamInfo(teamID: string): Promise<TeamInfoData>;
  getInviteInfo(): Promise<TeamInviteData>;
}
