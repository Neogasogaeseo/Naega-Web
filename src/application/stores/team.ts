import { IssueData, TeamMember } from '@api/types/team';
import { atom } from 'recoil';

interface SearchedMember extends TeamMember {
  isAdded: boolean;
}

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
