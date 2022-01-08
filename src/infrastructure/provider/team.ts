import { IssueData } from './types/team';

export interface TeamService {
  getIssueInfo(teamID: string, issueID: string): Promise<IssueData>;
}
