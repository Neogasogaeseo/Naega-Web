import { TeamMemberNoneId } from '@api/types/team';
import IssueMemberList from '../IssueMemberList';
import IssueTeamInfo from '../IssueTeamInfo';
import { StIssueCard, StCardHeader, StCardContent, StCardFooter } from './style';

interface IssueCardProps {
  teamID: string;
  issueNumber: number;
  issueCardImage?: string;
  category: string;
  dates: string;
  content: string;
  issueMembers: TeamMemberNoneId[];
  teamImage?: string;
  teamName: string;
  memberName: string;
  onIssueClick: (teamID: string, issueNumber: number) => void;
}

function IssueCard(props: IssueCardProps) {
  const {
    teamID,
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
    <StIssueCard issueCardImage={issueCardImage} onClick={() => onIssueClick(teamID, issueNumber)}>
      {issueCardImage && <div></div>}
      <div>
        <StCardHeader>
          <span>{category}</span>
          <span>{dates}</span>
        </StCardHeader>
        <StCardContent>{content}</StCardContent>
        <StCardFooter>
          <IssueMemberList teamID={teamID} issueNumber={issueNumber} issueMembers={issueMembers} />
          <IssueTeamInfo teamImage={teamImage} teamName={teamName} memberName={memberName} />
        </StCardFooter>
      </div>
    </StIssueCard>
  );
}

export default IssueCard;
