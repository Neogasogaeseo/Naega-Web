import { useSetRecoilState } from 'recoil';

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
import { selectedUserListState } from '@stores/team';

export default function SearchedUserItem({
  user,
}: {
  user: SearchedUserForRegister | SearchedUserForEdit;
}) {
  const setSelectedUserList = useSetRecoilState(selectedUserListState);
  const getStateButton = (state: 'NONE' | 'MEMBER' | 'INVITED' | 'WILL_INVITE') => {
    switch (state) {
      case 'NONE':
        return <StNoneButton onClick={() => clickToggleButton(user)}>초대</StNoneButton>;
      case 'MEMBER':
        return <StMemberButton>팀원</StMemberButton>;
      case 'INVITED':
        return <StInvitedButton>초대 중</StInvitedButton>;
      case 'WILL_INVITE':
        return (
          <StWillInviteButton onClick={() => clickToggleButton(user)}>초대 취소</StWillInviteButton>
        );
    }
  };

  const clickToggleButton = (user: SearchedUserForRegister | SearchedUserForEdit) =>
    isForRegister(user)
      ? setSelectedUserList((current) =>
          user.isSelected
            ? current.filter((targetUser) => targetUser.id !== user.id)
            : [...current, user],
        )
      : setSelectedUserList((current) =>
          user.state === 'WILL_INVITE'
            ? current.filter((targetUser) => targetUser.id !== user.id)
            : [...current, user],
        );

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
          onClick={() => clickToggleButton(user)}
        />
      ) : (
        isForEdit(user) && getStateButton(user.state)
      )}
    </StSearchedUserItem>
  );
}
