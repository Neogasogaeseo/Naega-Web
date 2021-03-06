import { useNavigate } from 'react-router-dom';

import { TeamMemberNoneId } from '@api/types/team';
import { MAX_TEAM_MEMBER } from '@utils/constant';
import { StTeamMemberPopup, StWholeButton } from './style';
import { icWhole } from '@assets/icons';
import { imgEmptyProfile } from '@assets/images';

interface TeamMemberPopupProps {
  members: TeamMemberNoneId[];
  teamID: number;
}

function TeamMemberPopup(props: TeamMemberPopupProps) {
  const { members, teamID } = props;
  const slicedMemberList = members.slice(0, MAX_TEAM_MEMBER);
  const navigate = useNavigate();

  return (
    <StTeamMemberPopup>
      {slicedMemberList.map(({ id, profileName, profileImage }) => (
        <div key={id}>
          <img src={profileImage || imgEmptyProfile} />
          <span>{profileName}</span>
        </div>
      ))}
      <StWholeButton onClick={() => navigate(`/team/${teamID}/member`)}>
        전체보기
        <img src={icWhole} />
      </StWholeButton>
    </StTeamMemberPopup>
  );
}

export default TeamMemberPopup;
