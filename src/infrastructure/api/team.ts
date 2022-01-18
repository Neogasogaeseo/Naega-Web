import {
  IssueData,
  PostFeedbackBookmarkResponse,
  TeamProfileData,
  TeamIssueData,
  TeamInviteData,
} from './types/team';

export interface TeamService {
  getIssueInfo(teamID: string, issueID: string): Promise<IssueData>;
  postFeedbackBookmark(feedbackID: string): Promise<PostFeedbackBookmarkResponse>;
  getTeamProfile(): Promise<TeamProfileData>;
  getMyIssue(): Promise<TeamIssueData>;
  getTeamIssue(teamID: string): Promise<TeamIssueData>;
  getInviteInfo(): Promise<TeamInviteData>;
}
