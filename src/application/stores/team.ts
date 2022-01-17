import { IssueData, SearchedMember } from '@api/types/team';
import { atom } from 'recoil';

export const teamIssueState = atom<IssueData | null>({
  key: 'teamIssueState',
  default: null,
});

export const searchedMemberListState = atom<SearchedMember[]>({
  key: 'searchedMemberListState',
  default: [
    {
      id: 1,
      profileId: 'minsu',
      profileName: '짠돌이',
      profileImage:
        'https://user-images.githubusercontent.com/73823388/149194885-8609eb8e-5255-491b-9594-84137caf7265.jpeg',
      isAdded: false,
    },
    {
      id: 2,
      profileId: 'minsuminsu',
      profileName: '수민',
      profileImage:
        'https://user-images.githubusercontent.com/73823388/149194902-76a30e2d-684f-4a71-9503-734c818c5406.jpeg',
      isAdded: false,
    },
  ],
});

export const selectedMemberListState = atom<Required<Omit<SearchedMember, 'isAdded'>>[]>({
  key: 'selectedMemberListState',
  default: [],
});
