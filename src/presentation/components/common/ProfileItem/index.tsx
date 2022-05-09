import { StProfileItem } from './style';
import { imgEmptyProfile } from '@assets/images/index';

interface ProfileItemProps {
  id: number;
  profileImage?: string;
  profileName?: string;
  isSquare: boolean;
  isSelected?: boolean | undefined;
  onProfileClick: (id: number) => void;
}

function ProfileItem(props: ProfileItemProps) {
  const { id, profileImage, profileName, isSquare, onProfileClick, isSelected } = props;

  return (
    <StProfileItem isSquare={isSquare} isSelected={isSelected} onClick={() => onProfileClick(id)}>
      <div>
        <img src={profileImage || imgEmptyProfile} />
      </div>
      <div>{profileName && profileName}</div>
    </StProfileItem>
  );
}

export default ProfileItem;
