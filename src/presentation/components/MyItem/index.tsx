import { StMyItem } from './style';
import { imgEmptyProfile } from '@assets/images/index';

interface MyItemProps {
  id: number;
  title?: string;
  profileImage?: string;
  isSquare: boolean;
  isSelected?: boolean | undefined;
  onProfileClick: (id: number) => void;
}

function MyItem(props: MyItemProps) {
  const { id, title, profileImage, isSquare, onProfileClick, isSelected } = props;

  return (
    <StMyItem
      isSquare={isSquare}
      isSelected={isSelected}
      img={profileImage || imgEmptyProfile}
      onClick={() => onProfileClick(id)}
    >
      <div />
      {isSquare && <span>{title}</span>}
    </StMyItem>
  );
}

export default MyItem;
