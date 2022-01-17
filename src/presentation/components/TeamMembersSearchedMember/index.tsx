import { StTeamMembersSearchedMember, StProfileName, StId } from './style';
import { SearchedMember } from '@api/types/team';
import { imgEmptyProfile } from '@assets/images';
import { IcMemberAdd, IcMemberAdded } from '@assets/icons';

interface TeamMembersSearchedMemberProps {
  member: SearchedMember;
  onClickButton: (id: number, profileName: string, isAdded: boolean) => void;
}

export default function TeamMembersSearchedMember(props: TeamMembersSearchedMemberProps) {
  const { member, onClickButton } = props;
  const { id, profileName, profileImage = imgEmptyProfile, isAdded } = member;
  return (
    <StTeamMembersSearchedMember>
      <div>
        <img src={profileImage} />
        <div>
          <StProfileName>{profileName}</StProfileName>
          <StId>@{id}</StId>
        </div>
      </div>
      {isAdded ? (
        <IcMemberAdded onClick={() => onClickButton(id, profileName, isAdded)} />
      ) : (
        <IcMemberAdd onClick={() => onClickButton(id, profileName, isAdded)} />
      )}
    </StTeamMembersSearchedMember>
  );
}
