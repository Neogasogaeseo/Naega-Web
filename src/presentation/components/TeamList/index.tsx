import ProfileItem from '@components/common/ProfileItem';
import ProfileAddButton from '@components/common/ProfileAddButton';
import { StTeamListWrapper, StItemContainer } from './style';

function TeamList() {
  const tempName = '기업적디자인';

  return (
    <StTeamListWrapper>
      <StItemContainer>
        <ProfileItem profileName={tempName} />
        <ProfileItem profileName={tempName} />
        <ProfileAddButton />
      </StItemContainer>
    </StTeamListWrapper>
  );
}

export default TeamList;
