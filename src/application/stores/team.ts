import { SearchedUserForRegister } from '@api/types/team';
import { atom } from 'recoil';

export const selectedUserListState = atom<SearchedUserForRegister[]>({
  key: 'selectedUserListState',
  default: [],
});
