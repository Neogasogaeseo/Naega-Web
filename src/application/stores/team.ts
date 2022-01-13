import { IssueData, TeamIssueData } from '@api/types/team';
import { atom } from 'recoil';

export const teamIssueState = atom<IssueData | null>({
  key: 'teamIssueState',
  default: null,
});

export const teamIssueCardState = atom<TeamIssueData | null>({
  key: 'teamIssueCardState',
  default: null,
});
