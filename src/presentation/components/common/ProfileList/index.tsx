import ProfileItem from '@components/common/ProfileItem';
import ProfileAddButton from '@components/common/ProfileAddButton';
import { StProfileList, StItemWrapper } from './style';

export interface ProfileListData {
  id: number;
  profileImage?: string;
  profileName: string;
}

interface ProfileListProps {
  isSquare: boolean;
  profileListData: ProfileListData[];
  onProfileClick?: (id: number) => void;
  onAddClick: () => void;
  isAddNeeded?: boolean;
}

function ProfileList(props: ProfileListProps) {
  const {
    isSquare,
    profileListData,
    onProfileClick = () => {
      return;
    },
    onAddClick,
    isAddNeeded = true,
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
        {isAddNeeded && <ProfileAddButton isSquare={isSquare} onAddClick={onAddClick} />}
      </StItemWrapper>
    </StProfileList>
  );
}

export default ProfileList;