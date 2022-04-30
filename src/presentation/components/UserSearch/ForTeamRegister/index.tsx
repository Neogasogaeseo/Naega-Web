import { useCallback, useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { useInfiniteQuery } from 'react-query';

import CommonNavigation from '@components/common/Navigation';
import CommonInput from '@components/common/Input';
import { icSearch } from '@assets/icons';
import { StPaddingWrapper, StUserSearchForTeamRegister } from './style';
import { selectedUserListState } from '@stores/team';
import MutableKeywordList from '@components/common/Keyword/MutableList';
import { COLOR } from '@styles/common/color';
import UserSearchResultForTeamRegister from './Result';
import { useScrollHeight } from '@hooks/useScrollHeight';
import { api } from '@api/index';
import { SEARCHED_USER_PAGE } from '@utils/constant';
import { SearchedUser } from '@api/types/team';

export default function UserSearchForTeamRegister({
  onClickSubmitButton: onClickSubmitButton,
}: {
  onClickSubmitButton: () => void;
}) {
  const [inputValue, setInputValue] = useState('');
  const [searchWord, setSearchWord] = useState('');
  const [selectedUserList, setSelectedUserList] = useRecoilState(selectedUserListState);
  const { isBottomReached, isInitialState: isInitialScroll } = useScrollHeight();
  const [searchedUserList, setSearchedUserList] = useState<SearchedUser[] | null>(null);

  const searchUserByPage = useCallback(
    async ({ pageParam = 0 }) => {
      const response = await api.teamService.getSearchedUserList(searchWord, pageParam);
      return {
        result: response,
        nextPage: pageParam + SEARCHED_USER_PAGE,
        isLast: response.length < SEARCHED_USER_PAGE,
      };
    },
    [searchWord],
  );

  const {
    data: searchedUserListResponseByPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery(['userSearch', searchWord], searchUserByPage, {
    getNextPageParam: (lastPage) => (lastPage.isLast ? undefined : lastPage.nextPage),
    enabled: !(searchWord === ''),
    retry: 1,
  });

  const getSearchedUserList = (): SearchedUser[] | null => {
    if (!searchedUserListResponseByPage) return null;
    const searchedUserListResponse = searchedUserListResponseByPage.pages.flatMap(
      (page) => page.result,
    );
    if (!searchedUserListResponse) return [];
    const idList = selectedUserList.map(({ id }) => id);
    return searchedUserListResponse.map((user) => ({
      ...user,
      isSelected: idList.includes(user.id),
    }));
  };

  useEffect(() => {
    if (!isInitialScroll) fetchNextPage();
  }, [isBottomReached, isInitialScroll]);

  useEffect(() => {
    const searchedUserList = getSearchedUserList();
    setSearchedUserList(searchedUserList);
  }, [searchedUserListResponseByPage, selectedUserList]);

  return (
    <StUserSearchForTeamRegister>
      <CommonNavigation
        isBack={false}
        title="팀원 추가"
        submitButton={{
          content: '완료',
          onClick: () => {
            onClickSubmitButton();
            setInputValue('');
          },
        }}
      />
      <StPaddingWrapper>
        <CommonInput
          value={inputValue}
          onChange={(value) => setInputValue(value)}
          onSubmit={() => {
            setSearchWord(inputValue);
          }}
          placeholder="팀원 검색하기"
          width="100%"
          submitButtonValue="검색"
          img={icSearch}
        />
        {selectedUserList && (
          <MutableKeywordList
            keywordList={selectedUserList.map(({ profileID, name }) => ({
              id: profileID,
              content: name,
              color: COLOR.GRAY_2,
              fontColor: COLOR.GRAY_6,
            }))}
            deleteKeyword={(targetUser) =>
              setSelectedUserList(
                selectedUserList.filter((user) => user.profileID !== targetUser.id),
              )
            }
            viewMode="flex"
          />
        )}
      </StPaddingWrapper>
      <UserSearchResultForTeamRegister
        isFetchingNextPage={isFetchingNextPage}
        searchedUserList={searchedUserList}
      />
    </StUserSearchForTeamRegister>
  );
}
