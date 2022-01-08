import { StAddButton } from './style';
import { icPlus } from '@assets/icons/index';

function ProfileAddButton() {
  return (
    <StAddButton>
      <img src={icPlus} />
    </StAddButton>
  );
}

export default ProfileAddButton;
