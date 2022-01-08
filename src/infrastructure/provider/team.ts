export interface TeamService {
  getIssueInfo(teamID: string, issueID: string): Promise<IssueData>;
}

type IssueData = {
  createdAt: string;
  title: string;
  category: string;
  team: TeamData;
  issueList: IssueDetail[];
  writer: string;
};

type TeamData = {
  teammates: string[];
  thumbnail: string;
  title: string;
};

type IssueDetail = {
  writer: string;
  target: string;
  body: string;
  createdAt: string;
  keywordList: string[];
};
