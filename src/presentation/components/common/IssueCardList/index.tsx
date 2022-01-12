import IssueCard from '../IssueCard';

export interface IssueListData {
  id: number;
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
}

function IssueCardList(props: IssueListProps) {
  const { issueListData } = props;
  return (
    <div>
      {issueListData.map((issue) => (
        <IssueCard key={issue.id} {...issue} />
      ))}
    </div>
  );
}

export default IssueCardList;
