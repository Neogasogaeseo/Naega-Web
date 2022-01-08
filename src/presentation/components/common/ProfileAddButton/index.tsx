import { StAddButton } from './style';
import { IconPlus } from '../../../../assets/icons/index';

function ProfileAddButton() {
  return (
    <StAddButton>
      <img src={IconPlus} />
    </StAddButton>
  );
}

export default ProfileAddButton;
