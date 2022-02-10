import { StTeamMembersSearchedUser, StProfileName, StId, StAddToggleButton } from './style';
import { SearchedUser } from '@api/types/team';
import { imgEmptyProfile } from '@assets/images';
import { icMemberAdd, icMemberAdded } from '@assets/icons';

interface TeamMembersSearchedUserProps {
  user: SearchedUser;
  onClickButton: (id: number, profileName: string, isAdded: boolean) => void;
}

export default function TeamMembersSearchedUser(props: TeamMembersSearchedUserProps) {
  const { user, onClickButton } = props;
  const { id, profileId, profileName, profileImage, isAdded } = user;
  return (
    <StTeamMembersSearchedUser>
      <div>
        <img src={profileImage || imgEmptyProfile} />
        <div>
          <StProfileName>{profileName}</StProfileName>
          <StId>@{profileId}</StId>
        </div>
      </div>
      <StAddToggleButton
        src={isAdded ? icMemberAdded : icMemberAdd}
        onClick={() => onClickButton(id, profileName, isAdded)}
      />
    </StTeamMembersSearchedUser>
  );
}
