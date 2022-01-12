import IssueMemberList from '../IssueMemberList';
import IssueTeamInfo from '../IssueTeamInfo';
import { StIssueCard, StTopLeft, StContent, StBottom } from './style';

interface IssueCardProps {
  id: number;
  category: string;
  dates: string;
  content: string;
  issueMembers: string[];
  teamImage?: string;
  teamName: string;
  memberName: string;
}

function IssueCard(props: IssueCardProps) {
  const { id, category, dates, content, issueMembers, teamImage, teamName, memberName } = props;
  return (
    <StIssueCard>
      <StTopLeft>
        <span>{category}</span>
        <span>{dates}</span>
      </StTopLeft>
      <StContent>{content}</StContent>
      <StBottom>
        <IssueMemberList id={id} issueMembers={issueMembers} />
        <IssueTeamInfo teamImage={teamImage} teamName={teamName} memberName={memberName} />
      </StBottom>
    </StIssueCard>
  );
}

export default IssueCard;
