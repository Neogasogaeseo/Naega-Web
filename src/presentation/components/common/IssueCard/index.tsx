import IssueMemberList from '../IssueMemberList';
import IssueTeamInfo from '../IssueTeamInfo';
import {
  StIssueCard,
  StCardImage,
  StCardText,
  StCardHeader,
  StCardContent,
  StCardFooter,
} from './style';

interface IssueCardProps {
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

function IssueCard(props: IssueCardProps) {
  const {
    id,
    issueCardImage,
    category,
    dates,
    content,
    issueMembers,
    teamImage,
    teamName,
    memberName,
  } = props;
  return (
    <StIssueCard>
      {issueCardImage ? <StCardImage issueCardImage={issueCardImage} /> : null}
      <StCardText>
        <StCardHeader>
          <span>{category}</span>
          <span>{dates}</span>
        </StCardHeader>
        <StCardContent>{content}</StCardContent>
        <StCardFooter>
          <IssueMemberList id={id} issueMembers={issueMembers} />
          <IssueTeamInfo teamImage={teamImage} teamName={teamName} memberName={memberName} />
        </StCardFooter>
      </StCardText>
    </StIssueCard>
  );
}

export default IssueCard;
