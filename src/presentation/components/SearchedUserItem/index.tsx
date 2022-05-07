import {
  StSearchedUserItem,
  StProfileName,
  StId,
  StAddToggleButton,
  StNoneButton,
  StMemberButton,
  StInvitedButton,
  StWillInviteButton,
} from './style';
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

  const getStatusButton = (status: 'NONE' | 'MEMBER' | 'INVITED' | 'WILL_INVITE') => {
    switch (status) {
      case 'NONE':
        return <StNoneButton>초대</StNoneButton>;
      case 'MEMBER':
        return <StMemberButton>팀원</StMemberButton>;
      case 'INVITED':
        return <StInvitedButton>초대 중</StInvitedButton>;
      case 'WILL_INVITE':
        return <StWillInviteButton>초대 취소</StWillInviteButton>;
    }
  };

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
        isForEdit(user) && getStatusButton(user.status)
      )}
    </StSearchedUserItem>
  );
}
