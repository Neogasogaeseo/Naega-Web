import { StProfileItem } from './style';
import { imgEmptyProfile } from '@assets/images/index';

interface ProfileItemProps {
  id: string;
  profileImage?: string;
  profileName: string;
  isSquare: boolean;
  isSelected?: boolean | undefined;
  onProfileClick: (id: string) => void;
}

function ProfileItem(props: ProfileItemProps) {
  const { id, profileImage, profileName, isSquare, onProfileClick, isSelected } = props;

  return (
    <StProfileItem isSquare={isSquare} isSelected={isSelected} onClick={() => onProfileClick(id)}>
      <div>{profileImage ? <img src={profileImage} /> : <img src={imgEmptyProfile} />}</div>
      <div>{profileName}</div>
    </StProfileItem>
  );
}

export default ProfileItem;
