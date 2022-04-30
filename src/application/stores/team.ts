import { SearchedUser } from '@api/types/team';
import { atom } from 'recoil';

export const selectedUserListState = atom<SearchedUser[]>({
  key: 'selectedUserListState',
  default: [],
});
