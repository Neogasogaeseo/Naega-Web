import { IssueData, PostFeedbackBookmarkResponse, TeamIssueData } from './types/team';

export interface TeamService {
  getIssueInfo(teamID: string, issueID: string): Promise<IssueData>;
  postFeedbackBookmark(feedbackID: string): Promise<PostFeedbackBookmarkResponse>;
  getTeamIssue(): Promise<TeamIssueData>;
}
