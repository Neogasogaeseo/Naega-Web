import { useState } from 'react';
import { useRecoilState } from 'recoil';

import CommonNavigation from '@components/common/Navigation';
import CommonInput from '@components/common/Input';
import { icSearch } from '@assets/icons';
import { StUserSearchForTeamRegister } from './style';
import { selectedUserListState } from '@stores/team';
import MutableKeywordList from '@components/common/Keyword/MutableList';
import { COLOR } from '@styles/common/color';
import UserSearchResultForTeamRegister from '../Result/ForTeamRegister';

export default function UserSearchForTeamRegister({
  onClickSubmitButton: onClickSubmitButton,
}: {
  onClickSubmitButton: () => void;
}) {
  const [searchWord, setSearchWord] = useState('');
  const [selectedUserList, setSelectedUserList] = useRecoilState(selectedUserListState);
  return (
    <StUserSearchForTeamRegister isSelected={!!selectedUserList}>
      <CommonNavigation
        isBack={false}
        title="팀원 추가"
        submitButton={{
          content: '완료',
          onClick: () => {
            onClickSubmitButton();
            setSearchWord('');
          },
        }}
      />
      <CommonInput
        value={searchWord}
        onChange={(searchWord) => setSearchWord(searchWord)}
        onSubmit={() => console.log()}
        placeholder="팀원 검색하기"
        width="calc(100%-40px)"
        submitButtonValue="검색"
        img={icSearch}
      />
      {selectedUserList && (
        <MutableKeywordList
          keywordList={selectedUserList.map(({ profileID, name }) => ({
            id: profileID,
            content: name,
            color: COLOR.GRAY_2,
          }))}
          deleteKeyword={(targetUser) =>
            setSelectedUserList(selectedUserList.filter((user) => user.profileID !== targetUser.id))
          }
          viewMode="flex"
        />
      )}
      <UserSearchResultForTeamRegister />
    </StUserSearchForTeamRegister>
  );
}
