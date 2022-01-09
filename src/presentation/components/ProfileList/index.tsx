import ProfileItem from '@components/common/ProfileItem';
import ProfileAddButton from '@components/common/ProfileAddButton';
import { StProfileListWrapper, StItemContainer } from './style';

interface ProfileListDataProps {
  id: number;
  profileImage?: string;
  profileName: string;
}

interface ProfileListProps {
  isSquare: boolean;
  profileListData: ProfileListDataProps[];
  onProfileClick: (id: number) => void;
  onAddClick: () => void;
}

function ProfileList(props: ProfileListProps) {
  const { isSquare, profileListData, onProfileClick, onAddClick } = props;

  return (
    <StProfileListWrapper>
      <StItemContainer isSquare={isSquare}>
        {profileListData.map(({ id, profileImage, profileName }) => (
          <ProfileItem
            key={id}
            id={id}
            profileImage={profileImage}
            profileName={profileName}
            isSquare={isSquare}
            onProfileClick={() => onProfileClick(id)}
          />
        ))}
        <ProfileAddButton isSquare={isSquare} onAddClick={onAddClick} />
      </StItemContainer>
    </StProfileListWrapper>
  );
}

export default ProfileList;
