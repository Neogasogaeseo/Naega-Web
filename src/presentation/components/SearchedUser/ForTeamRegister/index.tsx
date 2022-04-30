import { StTeamMembersSearchedUser, StProfileName, StId, StAddToggleButton } from './style';
import { SearchedUser } from '@api/types/team';
import { imgEmptyProfile } from '@assets/images';
import { icMemberAdd, icMemberAdded } from '@assets/icons';

interface TeamMembersSearchedUserProps {
  user: SearchedUser;
  onClickButton: (id: number, profileName: string, isAdded: boolean) => void;
}

export default function SearchedUserForTeamRegister(props: TeamMembersSearchedUserProps) {
  const { user, onClickButton } = props;
  const { id, profileID, name, image, isSelected } = user;
  return (
    <StTeamMembersSearchedUser>
      <div>
        <img src={image || imgEmptyProfile} />
        <div>
          <StProfileName>{name}</StProfileName>
          <StId>@{profileID}</StId>
        </div>
      </div>
      <StAddToggleButton
        src={isSelected ? icMemberAdded : icMemberAdd}
        onClick={() => onClickButton(id, name, isSelected)}
      />
    </StTeamMembersSearchedUser>
  );
}
