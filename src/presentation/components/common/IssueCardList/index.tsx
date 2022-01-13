import IssueCard from '../IssueCard';

export interface IssueListData {
  teamId: number;
  issueNumber: number;
  issueCardImage?: string;
  category: string;
  dates: string;
  content: string;
  issueMembers: string[];
  teamImage?: string;
  teamName: string;
  memberName: string;
}

interface IssueListProps {
  issueListData: IssueListData[];
  onIssueClick: (teamId: number, issueNumber: number) => void;
}

function IssueCardList(props: IssueListProps) {
  const { issueListData, onIssueClick } = props;
  return (
    <div>
      {issueListData.map((issue) => (
        <IssueCard
          key={issue.teamId}
          onIssueClick={() => onIssueClick(issue.teamId, issue.issueNumber)}
          {...issue}
        />
      ))}
    </div>
  );
}

export default IssueCardList;
