import IssueTeamInfo from '../IssueTeamInfo';
import { StIssueCard, StTopLeft, StContent, StBottom } from './style';

interface IssueCardProps {
  id: number;
  category: string;
  dates: string;
  content: string;
  teamImage?: string;
  teamName: string;
  memberName: string;
}

function IssueCard(props: IssueCardProps) {
  const { category, dates, content, teamImage, teamName, memberName } = props;
  return (
    <StIssueCard>
      <StTopLeft>
        <span>{category}</span>
        <span>{dates}</span>
      </StTopLeft>
      <StContent>{content}</StContent>
      <StBottom>
        <div>이미지</div>
        <IssueTeamInfo teamImage={teamImage} teamName={teamName} memberName={memberName} />
      </StBottom>
    </StIssueCard>
  );
}

export default IssueCard;
