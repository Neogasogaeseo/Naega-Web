import { TeamMemberNoneId } from '@api/types/team';
import { imgEmptyProfile } from '@assets/images';
import { StTeamMemberPopup } from './style';

interface TeamMemberPopupProps {
  members: TeamMemberNoneId[];
}

function TeamMemberPopup(props: TeamMemberPopupProps) {
  const { members } = props;
  return (
    <StTeamMemberPopup>
      <div>
        {members.map(({ id, profileName, profileImage }) => (
          <div key={id}>
            {profileImage ? <img src={profileImage} /> : <img src={imgEmptyProfile} />}
            <span>{profileName}</span>
          </div>
        ))}
      </div>
    </StTeamMemberPopup>
  );
}

export default TeamMemberPopup;
