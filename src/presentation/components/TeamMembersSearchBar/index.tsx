import {
  StTeamMembersSearchBar,
  StSearchIconWrapper,
  StSearchInput,
  StSearchButtonWrapper,
  StSearchButton,
} from './style';
import { IcSearch } from '@assets/icons';
import MutableKeywordList from '@components/common/Keyword/MutableList';
import { useRecoilState } from 'recoil';
import { selectedMemberListState } from '@stores/team';

export default function TeamMembersSearchBar() {
  const [selectedMemberList, setSelectedMemberList] = useRecoilState(selectedMemberListState);
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
      {selectedMemberList && (
        <MutableKeywordList
          keywordList={selectedMemberList.map(({ id, profileName }) => ({
            id: id,
            content: profileName,
          }))}
          deleteKeyword={(targetMember) =>
            setSelectedMemberList(
              selectedMemberList.filter((member) => member.id !== targetMember.id),
            )
          }
          viewMode="flex"
        />
      )}
    </StTeamMembersSearchBar>
  );
}
