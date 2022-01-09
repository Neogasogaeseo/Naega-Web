import ProfileItem from '@components/common/ProfileItem';
import ProfileAddButton from '@components/common/ProfileAddButton';
import { StProfileListWrapper, StItemWrapper } from './style';

interface ProfileListData {
  id: number;
  profileImage?: string;
  profileName: string;
}

interface ProfileListProps {
  isSquare: boolean;
  profileListData: ProfileListData[];
  onProfileClick: (id: number) => void;
  onAddClick: () => void;
}

function ProfileList(props: ProfileListProps) {
  const { isSquare, profileListData, onProfileClick, onAddClick } = props;

  return (
    <StProfileListWrapper>
      <StItemWrapper isSquare={isSquare}>
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
      </StItemWrapper>
    </StProfileListWrapper>
  );
}

export default ProfileList;
