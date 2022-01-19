import { StTeamMembersSearchedMember, StProfileName, StId, StAddToggleButton } from './style';
import { SearchedUser } from '@api/types/team';
import { imgEmptyProfile } from '@assets/images';
import { icMemberAdd, icMemberAdded } from '@assets/icons';

interface TeamMembersSearchedMemberProps {
  member: SearchedUser;
  onClickButton: (id: number, profileName: string, isAdded: boolean) => void;
}

export default function TeamMembersSearchedMember(props: TeamMembersSearchedMemberProps) {
  const { member, onClickButton } = props;
  const { id, profileId, profileName, profileImage = imgEmptyProfile, isAdded } = member;
  return (
    <StTeamMembersSearchedMember>
      <div>
        <img src={profileImage} />
        <div>
          <StProfileName>{profileName}</StProfileName>
          <StId>@{profileId}</StId>
        </div>
      </div>
      <StAddToggleButton
        src={isAdded ? icMemberAdded : icMemberAdd}
        onClick={() => onClickButton(id, profileName, isAdded)}
      />
    </StTeamMembersSearchedMember>
  );
}
