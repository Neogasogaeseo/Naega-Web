import { TeamMember } from '@api/types/team';
import { imgEmptyProfile } from '@assets/images';
import { StTeamMemberPopup } from './style';

interface TeamMemberPopupProps {
  members: TeamMember[];
}

function TeamMemberPopup(props: TeamMemberPopupProps) {
  const { members } = props;
  return (
    <StTeamMemberPopup>
      {members.map(({ id, profileName, profileImage }) => (
        <div key={id}>
          <img src={profileImage ?? imgEmptyProfile} />
          <span>{profileName}</span>
        </div>
      ))}
    </StTeamMemberPopup>
  );
}

export default TeamMemberPopup;
