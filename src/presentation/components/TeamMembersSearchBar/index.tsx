import { StTeamMembersSearchBar } from './style';
import MutableKeywordList from '@components/common/Keyword/MutableList';
import { useRecoilState } from 'recoil';
import { selectedUserListState, userSearchWordState } from '@stores/team';
import { COLOR } from '@styles/common/color';
import CommonInput from '@components/common/Input';
import { icSearch } from '@assets/icons';

export default function TeamMembersSearchBar({
  onSubmitSearch,
}: {
  onSubmitSearch: () => Promise<void>;
}) {
  const [selectedUserList, setSelectedUserList] = useRecoilState(selectedUserListState);
  const [userSearchWord, setUserSearchWord] = useRecoilState(userSearchWordState);
  return (
    <StTeamMembersSearchBar>
      <CommonInput
        value={userSearchWord}
        onChange={(userSearchWord) => setUserSearchWord(userSearchWord)}
        onSubmit={() => {
          onSubmitSearch();
        }}
        placeholder="팀원 검색하기"
        width="100%"
        submitButtonValue="검색"
        img={icSearch}
      />
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
