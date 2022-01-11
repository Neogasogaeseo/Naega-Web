import IssueCard from '../IssueCard';

export interface IssueListData {
  id: number;
  category: string;
  dates: string;
  content: string;
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
      {issueListData.map(({ id, category, dates, content, teamImage, teamName, memberName }) => (
        <IssueCard
          key={id}
          id={id}
          category={category}
          dates={dates}
          content={content}
          teamImage={teamImage}
          teamName={teamName}
          memberName={memberName}
        />
      ))}
    </div>
  );
}

export default IssueCardList;
