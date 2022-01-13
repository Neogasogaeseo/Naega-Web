import IssueCard from '../IssueCard';

export interface IssueListData {
  teamID: string;
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
  onIssueClick: (teamID: string, issueNumber: number) => void;
}

function IssueCardList(props: IssueListProps) {
  const { issueListData, onIssueClick } = props;
  return (
    <div>
      {issueListData.map((issue) => (
        <IssueCard
          key={issue.teamID}
          onIssueClick={() => onIssueClick(issue.teamID, issue.issueNumber)}
          {...issue}
        />
      ))}
    </div>
  );
}

export default IssueCardList;
