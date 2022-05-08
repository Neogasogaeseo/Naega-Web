import { SearchedUserForEdit, SearchedUserForRegister } from '@api/types/team';
import { atom } from 'recoil';

export const selectedUserListState = atom<Array<SearchedUserForRegister | SearchedUserForEdit>>({
  key: 'selectedUserListState',
  default: [],
});
