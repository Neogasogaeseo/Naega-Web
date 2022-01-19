import {
  IssueData,
  PostFeedbackBookmarkResponse,
  TeamProfileData,
  TeamIssueData,
  TeamInfoData,
  TeamInviteData,
  TeamMember,
} from './types/team';

export interface TeamService {
  getIssueInfo(teamID: string, issueID: string): Promise<IssueData>;
  postFeedbackBookmark(feedbackID: string): Promise<PostFeedbackBookmarkResponse>;
  getTeamProfile(): Promise<TeamProfileData>;
  getMyTeamIssue(): Promise<TeamIssueData>;
  getTeamInfo(teamID: number): Promise<TeamInfoData | undefined>;
  getTeamIssue(teamID: string): Promise<TeamIssueData>;
  getMyIssue(teamID:string): Promise<TeamIssueData>;
  getInviteInfo(): Promise<TeamInviteData>;
  getSearchedTeamMemberList(profileId: string, teamId: number): Promise<TeamMember[]>;
}
