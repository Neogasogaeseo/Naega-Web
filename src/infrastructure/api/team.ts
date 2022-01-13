import {
  IssueData,
  PostFeedbackBookmarkResponse,
  TeamProfileData,
  TeamIssueData,
} from './types/team';

export interface TeamService {
  getIssueInfo(teamID: string, issueID: string): Promise<IssueData>;
  postFeedbackBookmark(feedbackID: string): Promise<PostFeedbackBookmarkResponse>;
  getTeamProfile(): Promise<TeamProfileData>;
  getTeamIssue(): Promise<TeamIssueData>;
}
