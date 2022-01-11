import { StProfileItem } from './style';
import { imgEmptyProfile } from '@assets/images/index';

interface ProfileItemProps {
  id: number;
  profileImage?: string;
  profileName: string;
  isSquare: boolean;
  onProfileClick: (id: number) => void;
}

function ProfileItem(props: ProfileItemProps) {
  const { id, profileImage, profileName, isSquare, onProfileClick } = props;

  return (
    <StProfileItem isSquare={isSquare} onClick={() => onProfileClick(id)}>
      <div>{profileImage ? <img src={profileImage} /> : <img src={imgEmptyProfile} />}</div>
      <div>{profileName}</div>
    </StProfileItem>
  );
}

export default ProfileItem;
