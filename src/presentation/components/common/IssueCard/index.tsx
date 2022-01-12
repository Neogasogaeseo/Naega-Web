import IssueMemberList from '../IssueMemberList';
import IssueTeamInfo from '../IssueTeamInfo';
import { StIssueCard, StCardHeader, StCardContent, StCardFooter } from './style';

interface IssueCardProps {
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
  onIssueClick: (id: number, issueNumber: number) => void;
}

function IssueCard(props: IssueCardProps) {
  const {
    id,
    issueNumber,
    issueCardImage,
    category,
    dates,
    content,
    issueMembers,
    teamImage,
    teamName,
    memberName,
    onIssueClick,
  } = props;
  return (
    <StIssueCard issueCardImage={issueCardImage} onClick={() => onIssueClick(id, issueNumber)}>
      {issueCardImage && <div></div>}
      <div>
        <StCardHeader>
          <span>{category}</span>
          <span>{dates}</span>
        </StCardHeader>
        <StCardContent>{content}</StCardContent>
        <StCardFooter>
          <IssueMemberList id={id} issueNumber={issueNumber} issueMembers={issueMembers} />
          <IssueTeamInfo teamImage={teamImage} teamName={teamName} memberName={memberName} />
        </StCardFooter>
      </div>
    </StIssueCard>
  );
}

export default IssueCard;
