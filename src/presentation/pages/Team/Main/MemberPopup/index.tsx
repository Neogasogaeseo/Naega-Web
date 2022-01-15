import { TeamMembers } from '@api/types/team';
import { StTeamMemberPopup } from './style';

interface TeamMemberPopupProps {
  members: TeamMembers[];
}

function TeamMemberPopup(props: TeamMemberPopupProps) {
  const { members } = props;
  return (
    <StTeamMemberPopup>
      {members.map((member) => (
        <div key={member.memberID}>
          <img src={member.memberImage} />
          <span>{member.memberName}</span>
        </div>
      ))}
    </StTeamMemberPopup>
  );
}

export default TeamMemberPopup;
