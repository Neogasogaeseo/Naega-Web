import { StTeamMembersSearchBar } from './style';
import MutableKeywordList from '@components/common/Keyword/MutableList';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { selectedUserListState, userSearchWordState } from '@stores/team';
import { COLOR } from '@styles/common/color';
import CommonInput from '@components/common/CommonInput';
import { icSearch } from '@assets/icons';
import { useRef } from 'react';

export default function TeamMembersSearchBar({
  onSubmitSearch,
}: {
  onSubmitSearch: () => Promise<void>;
}) {
  const [selectedUserList, setSelectedUserList] = useRecoilState(selectedUserListState);
  const setUserSearchWord = useSetRecoilState(userSearchWordState);
  const userSearchWordRef = useRef<HTMLInputElement>(null);
  return (
    <StTeamMembersSearchBar>
      <CommonInput
        ref={userSearchWordRef}
        onChange={() =>
          userSearchWordRef.current && setUserSearchWord(userSearchWordRef.current.value)
        }
        onSubmit={() => {
          onSubmitSearch();
          userSearchWordRef.current && (userSearchWordRef.current.value = '');
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
