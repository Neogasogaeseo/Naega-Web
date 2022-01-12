import IssueCard from '../IssueCard';

export interface IssueListData {
  id: number;
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
  onIssueClick: (id: number, issueNumber: number) => void;
}

function IssueCardList(props: IssueListProps) {
  const { issueListData, onIssueClick } = props;
  return (
    <div>
      {issueListData.map((issue) => (
        <IssueCard
          key={issue.id}
          onIssueClick={() => onIssueClick(issue.id, issue.issueNumber)}
          {...issue}
        />
      ))}
    </div>
  );
}

export default IssueCardList;
