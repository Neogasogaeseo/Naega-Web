import { StTeamMembersSearchResult, StProfileName, StId } from './style';
import { TeamMember } from '@api/types/team';
import { imgEmptyProfile } from '@assets/images';
import { IcMemberAdd } from '@assets/icons';

export default function TeamMembersSearchResult(props: TeamMember) {
  const { id, profileName, profileImage = imgEmptyProfile } = props;
  return (
    <StTeamMembersSearchResult>
      <div>
        <img src={profileImage} />
        <div>
          <StProfileName>{profileName}</StProfileName>
          <StId>@{id}</StId>
        </div>
      </div>
      <IcMemberAdd />
    </StTeamMembersSearchResult>
  );
}
