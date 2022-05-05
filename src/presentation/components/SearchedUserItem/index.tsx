import { StSearchedUserItem, StProfileName, StId, StAddToggleButton } from './style';
import {
  isForEdit,
  isForRegister,
  SearchedUserForEdit,
  SearchedUserForRegister,
} from '@api/types/team';
import { imgEmptyProfile } from '@assets/images';
import { icMemberAdd, icMemberAdded } from '@assets/icons';

interface SearchedUserItemProps {
  user: SearchedUserForRegister | SearchedUserForEdit;
  onClickButton: (id: number, profileName: string, isAdded: boolean) => void;
}

export default function SearchedUserItem(props: SearchedUserItemProps) {
  const { user, onClickButton } = props;
  return (
    <StSearchedUserItem>
      <div>
        <img src={user.image || imgEmptyProfile} />
        <div>
          <StProfileName>{user.name}</StProfileName>
          <StId>@{user.profileID}</StId>
        </div>
      </div>
      {isForRegister(user) ? (
        <StAddToggleButton
          src={user.isSelected ? icMemberAdded : icMemberAdd}
          onClick={() => onClickButton(user.id, user.name, user.isSelected)}
        />
      ) : (
        isForEdit(user) && <button>임시버튼이야</button>
      )}
    </StSearchedUserItem>
  );
}
