import {
  StTeamMembersSearchBar,
  StSearchIconWrapper,
  StSearchInput,
  StSearchButtonWrapper,
  StSearchButton,
} from './style';
import { IcSearch } from '@assets/icons';
import MutableKeywordList from '@components/common/Keyword/MutableList';

export default function TeamMembersSearchBar() {
  const selectedMembers = [
    { id: '0', name: '박박서진' },
    { id: '1', name: '나나지연' },
    { id: '2', name: '짜짜효인' },
  ];
  return (
    <StTeamMembersSearchBar>
      <div>
        <StSearchIconWrapper>
          <IcSearch />
        </StSearchIconWrapper>
        <StSearchInput placeholder="팀원 검색하기" />
        <StSearchButtonWrapper>
          <StSearchButton>검색</StSearchButton>
        </StSearchButtonWrapper>
      </div>
      <MutableKeywordList
        keywordList={selectedMembers.map((member) => ({ id: member.id, content: member.name }))}
        deleteKeyword={() => console.log()}
        viewMode="flex"
      />
    </StTeamMembersSearchBar>
  );
}
