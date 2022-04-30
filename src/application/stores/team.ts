import { FeedbackDetail, SearchedUser } from '@api/types/team';
import { atom } from 'recoil';

export const teamFeedbackState = atom<FeedbackDetail[]>({
  key: 'teamIssueState',
  default: [],
});

export const selectedUserListState = atom<SearchedUser[]>({
  key: 'selectedUserListState',
  default: [],
});
