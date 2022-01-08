import { StProfileItemWrapper } from './style';
import { imgEmptyProfile } from '@assets/images/index';
import { useNavigate } from 'react-router-dom';

interface ProfileItemProps {
  id: number;
  profileImage?: string;
  profileName: string;
  type: string;
}

function ProfileItem(props: ProfileItemProps) {
  const { id, profileImage, profileName, type } = props;
  const navigate = useNavigate();

  const handleClick = () => {
    if (type === 'team') {
      navigate(`/team/${id}`);
    }
  };

  return (
    <StProfileItemWrapper type={type} onClick={handleClick}>
      <div>{profileImage ? <img src={profileImage} /> : <img src={imgEmptyProfile} />}</div>
      <div>{profileName}</div>
    </StProfileItemWrapper>
  );
}

export default ProfileItem;
