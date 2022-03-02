import { FeedbackDetail, SearchedUser, TeamMember } from '@api/types/team';
import { atom } from 'recoil';

export const teamFeedbackState = atom<FeedbackDetail[]>({
  key: 'teamIssueState',
  default: [],
});

export const searchedUserListState = atom<SearchedUser[]>({
  key: 'searchedUserListState',
  default: [],
});

export const selectedUserListState = atom<Required<TeamMember>[]>({
  key: 'selectedUserListState',
  default: [],
});

export const userSearchWordState = atom<string>({
  key: 'userSearchWordState',
  default: '',
});
