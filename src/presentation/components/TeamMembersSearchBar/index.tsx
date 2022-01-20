import { StTeamMembersSearchBar } from './style';
import MutableKeywordList from '@components/common/Keyword/MutableList';
import { useRecoilState } from 'recoil';
import { selectedUserListState, userSearchWordState } from '@stores/team';
import { COLOR } from '@styles/common/color';
import CommonInput from '@components/common/CommonInput';
import { icSearch } from '@assets/icons';

export default function TeamMembersSearchBar({
  onClickSearchButton,
}: {
  onClickSearchButton: () => Promise<void>;
}) {
  const [selectedUserList, setSelectedUserList] = useRecoilState(selectedUserListState);
  const [userSearchWord, setUserSearchWord] = useRecoilState(userSearchWordState);
  return (
    <StTeamMembersSearchBar>
      <CommonInput
        value={userSearchWord}
        onChange={(value) => setUserSearchWord(value)}
        placeholder="팀원 검색하기"
        width="100%"
        submitButton={{ value: '검색', onClick: onClickSearchButton }}
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
