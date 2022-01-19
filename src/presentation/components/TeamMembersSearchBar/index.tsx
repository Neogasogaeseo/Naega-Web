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
import { selectedUserListState, userSearchWordState } from '@stores/team';
import { COLOR } from '@styles/common/color';

export default function TeamMembersSearchBar({
  onClickSearchButton,
}: {
  onClickSearchButton: () => Promise<void>;
}) {
  const [selectedUserList, setSelectedUserList] = useRecoilState(selectedUserListState);
  const [userSearchWord, setUserSearchWord] = useRecoilState(userSearchWordState);
  return (
    <StTeamMembersSearchBar>
      <div>
        <StSearchIconWrapper>
          <IcSearch />
        </StSearchIconWrapper>
        <StSearchInput
          value={userSearchWord}
          onChange={(e) => setUserSearchWord(e.target.value)}
          placeholder="팀원 검색하기"
        />
        <StSearchButtonWrapper>
          <StSearchButton onClick={onClickSearchButton}>검색</StSearchButton>
        </StSearchButtonWrapper>
      </div>
      {selectedUserList && (
        <MutableKeywordList
          keywordList={selectedUserList.map(({ profileId, profileName }) => ({
            id: profileId,
            content: profileName,
            color: COLOR.GRAY_2,
          }))}
          deleteKeyword={(targetMember) =>
            setSelectedUserList(
              selectedUserList.filter((member) => member.profileId !== targetMember.id),
            )
          }
          viewMode="flex"
        />
      )}
    </StTeamMembersSearchBar>
  );
}
