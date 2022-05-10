import { StMyItem } from './style';
import { imgEmptyProfile } from '@assets/images/index';

interface MyItemProps {
  id: number;
  profileImage?: string;
  isSquare: boolean;
  isSelected?: boolean | undefined;
  onProfileClick: (id: number) => void;
}

function MyItem(props: MyItemProps) {
  const { id, profileImage, isSquare, onProfileClick, isSelected } = props;

  return (
    <StMyItem isSquare={isSquare} isSelected={isSelected} onClick={() => onProfileClick(id)}>
      <div>
        <img src={profileImage || imgEmptyProfile} />
      </div>
    </StMyItem>
  );
}

export default MyItem;
