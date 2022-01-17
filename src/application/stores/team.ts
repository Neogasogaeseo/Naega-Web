import { IssueData, SearchedMember } from '@api/types/team';
import { atom } from 'recoil';

export const teamIssueState = atom<IssueData | null>({
  key: 'teamIssueState',
  default: null,
});

export const searchedMemberListState = atom<SearchedMember[]>({
  key: 'searchedMemberListState',
  default: [],
});

export const selectedMemberListState = atom<Required<Omit<SearchedMember, 'isAdded'>>[]>({
  key: 'selectedMemberListState',
  default: [],
});
