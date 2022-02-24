import { TeamMemberNoneId } from '@api/types/team';
import IssueCard from '../IssueCard';

export interface IssueListData {
  teamID: string;
  issueNumber: number;
  issueCardImage?: string;
  category: string;
  dates: string;
  content: string;
  issueMembers: TeamMemberNoneId[];
  teamImage?: string;
  teamName: string;
  memberName: string;
}

interface IssueListProps {
  issueList: IssueListData[];
  onIssueClick: (teamID: string, issueNumber: number) => void;
}

function IssueCardList(props: IssueListProps) {
  const { issueList, onIssueClick } = props;
  return (
    <div>
      {issueList.map((issue) => (
        <IssueCard
          key={issue.issueNumber}
          onIssueClick={() => onIssueClick(issue.teamID, issue.issueNumber)}
          {...issue}
        />
      ))}
    </div>
  );
}

export default IssueCardList;
