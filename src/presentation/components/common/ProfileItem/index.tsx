import { StProfileItemWrapper } from './style';
import { ImgTeamProfile } from '../../../../assets/images/index';

interface ProfileItemProps {
  profileImage?: string;
  profileName: string;
}

function ProfileItem(props: ProfileItemProps) {
  const { profileImage, profileName } = props;

  return (
    <StProfileItemWrapper>
      <div>{profileImage ? <img src={profileImage} /> : <img src={ImgTeamProfile} />}</div>
      <div>{profileName}</div>
    </StProfileItemWrapper>
  );
}

export default ProfileItem;
