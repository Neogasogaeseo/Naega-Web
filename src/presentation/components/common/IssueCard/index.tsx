import { StIssueCard, StTopLeft, StContent } from './style';

interface IssueCardProps {
  id: number;
  category: string;
  dates: string;
  content: string;
}

function IssueCard(props: IssueCardProps) {
  const { category, dates, content } = props;
  return (
    <StIssueCard>
      <StTopLeft>
        <span>{category}</span>
        <span>{dates}</span>
      </StTopLeft>
      <StContent>{content}</StContent>
    </StIssueCard>
  );
}

export default IssueCard;
