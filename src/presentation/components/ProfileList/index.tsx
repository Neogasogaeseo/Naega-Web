import ProfileItem from '@components/common/ProfileItem';
import ProfileAddButton from '@components/common/ProfileAddButton';
import { StProfileList, StItemWrapper } from './style';

export interface ProfileListData {
  id: string;
  profileImage?: string;
  profileName: string;
}

interface ProfileListProps {
  isSquare: boolean;
  profileListData: ProfileListData[];
  onProfileClick?: (id: string) => void;
  onAddClick: () => void;
}

function ProfileList(props: ProfileListProps) {
  const {
    isSquare,
    profileListData,
    onProfileClick = () => {
      return;
    },
    onAddClick,
  } = props;

  return (
    <StProfileList>
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
    </StProfileList>
  );
}

export default ProfileList;
