import { StIssueTeamInfo } from './style';
import { imgEmptyProfile } from '@assets/images/index';

interface IssueTeamInfoProps {
  teamImage?: string;
  teamName: string;
  memberName: string;
}

function IssueTeamInfo(props: IssueTeamInfoProps) {
  const { teamImage, teamName, memberName } = props;
  return (
    <StIssueTeamInfo>
      {teamImage ? <img src={teamImage} /> : <img src={imgEmptyProfile} />}
      <span>{teamName}</span>
      <span>|</span>
      <span>{memberName}</span>
    </StIssueTeamInfo>
  );
}

export default IssueTeamInfo;
