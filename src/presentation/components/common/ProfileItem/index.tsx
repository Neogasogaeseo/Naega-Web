import { StProfileItemWrapper } from './style';
import { imgEmptyProfile } from '@assets/images/index';

interface ProfileItemProps {
  id: number;
  profileImage?: string;
  profileName: string;
  isSquare: boolean;
  isSelected?: boolean | undefined;
  onProfileClick: (id: number) => void;
}

function ProfileItem(props: ProfileItemProps) {
  const { id, profileImage, profileName, isSquare, onProfileClick, isSelected } = props;

  return (
    <StProfileItemWrapper
      isSquare={isSquare}
      isSelected={isSelected}
      onClick={() => onProfileClick(id)}
    >
      <div>{profileImage ? <img src={profileImage} /> : <img src={imgEmptyProfile} />}</div>
      <div>{profileName}</div>
    </StProfileItemWrapper>
  );
}

export default ProfileItem;