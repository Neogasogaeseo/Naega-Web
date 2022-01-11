import IssueCard from '../IssueCard';

export interface IssueListData {
  id: number;
  category: string;
  dates: string;
  content: string;
}

interface IssueListProps {
  issueListData: IssueListData[];
}

function IssueCardList(props: IssueListProps) {
  const { issueListData } = props;
  return (
    <div>
      {issueListData.map(({ id, category, dates, content }) => (
        <IssueCard key={id} id={id} category={category} dates={dates} content={content} />
      ))}
    </div>
  );
}

export default IssueCardList;
