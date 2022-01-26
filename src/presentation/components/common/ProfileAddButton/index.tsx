import { StAddButton } from './style';
import { icPlus } from '@assets/icons/index';

interface ProfileAddButtonProps {
  isSquare: boolean;
  onAddClick: () => void;
}

function ProfileAddButton(props: ProfileAddButtonProps) {
  const { isSquare, onAddClick } = props;

  return (
    <>
      <StAddButton isSquare={isSquare} onClick={onAddClick}>
        <img src={icPlus} alt="+" />
      </StAddButton>
    </>
  );
}

export default ProfileAddButton;
