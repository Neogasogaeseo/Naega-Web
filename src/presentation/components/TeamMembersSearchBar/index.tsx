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
import { COLOR } from '@styles/common/color';

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
          keywordList={selectedMemberList.map(({ profileId, profileName }) => ({
            id: profileId,
            content: profileName,
            color: COLOR.GRAY_2,
          }))}
          deleteKeyword={(targetMember) =>
            setSelectedMemberList(
              selectedMemberList.filter((member) => member.profileId !== targetMember.id),
            )
          }
          viewMode="flex"
        />
      )}
    </StTeamMembersSearchBar>
  );
}
