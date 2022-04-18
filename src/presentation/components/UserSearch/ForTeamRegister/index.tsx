import { useCallback, useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { useInfiniteQuery } from 'react-query';

import CommonNavigation from '@components/common/Navigation';
import CommonInput from '@components/common/Input';
import { icSearch } from '@assets/icons';
import { StUserSearchForTeamRegister } from './style';
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
  const [searchWord, setSearchWord] = useState('');
  const [searchWordForRequest, setSearchWordForRequest] = useState('');
  const [selectedUserList, setSelectedUserList] = useRecoilState(selectedUserListState);
  const { isBottomReached, isInitialState: isInitialScroll } = useScrollHeight();
  const [isInitialSearch, setIsInitialSearch] = useState(true);
  const [searchedUserList, setSearchedUserList] = useState<SearchedUser[] | null>(null);

  const searchUserByPage = useCallback(async ({ pageParam = 0 }) => {
    const response = await api.teamService.getSearchedUserList(searchWordForRequest, pageParam);
    return {
      result: response,
      nextPage: pageParam + SEARCHED_USER_PAGE,
      isLast: response.length < SEARCHED_USER_PAGE,
    };
  }, []);

  const {
    data: searchedUserListResponseByPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery(['userSearch', searchWordForRequest], searchUserByPage, {
    getNextPageParam: (lastPage) => (lastPage.isLast ? undefined : lastPage.nextPage),
    enabled: !isInitialSearch,
    refetchOnWindowFocus: false,
    retry: 1,
  });

  const getSearchedUserList = (): SearchedUser[] | null => {
    if (!searchedUserListResponseByPage) return null;
    const searchedUserListResponse = searchedUserListResponseByPage.pages
      .map((page) => page.result)
      .flat();
    if (!searchedUserListResponse) return [];
    const idList = selectedUserList.map(({ id }) => id);
    return searchedUserListResponse.map((user) => ({
      ...user,
      isSelected: idList.includes(user.id),
    }));
  };

  // const selectToggle = (user: SearchedUser): void => {
  //   // setSearchedUserList((current) =>
  //   //   current === null
  //   //     ? current
  //   //     : current.map((targetUser) =>
  //   //         targetUser.profileID === user.profileID
  //   //           ? { ...targetUser, isSelected: !targetUser.isSelected }
  //   //           : { ...targetUser },
  //   //       ),
  //   // );
  //   setSelectedUserList((current) =>
  //     user.isSelected
  //       ? current.filter((targetUser) => targetUser.id !== user.id)
  //       : [...current, user],
  //   );
  // };

  useEffect(() => {
    if (!isInitialScroll) fetchNextPage();
  }, [isBottomReached, isInitialScroll]);

  useEffect(() => {
    const searchedUserList = getSearchedUserList();
    setSearchedUserList(searchedUserList);
  }, [searchedUserListResponseByPage, selectedUserList]);

  useEffect(() => {
    if (isInitialSearch && searchWordForRequest) setIsInitialSearch(false);
    console.log('searchWordForRequest', searchWordForRequest);
  }, [searchWordForRequest]);

  useEffect(() => setIsInitialSearch(true), []);

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
        onSubmit={() => setSearchWordForRequest(searchWord)}
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
      <UserSearchResultForTeamRegister
        isFetchingNextPage={isFetchingNextPage}
        searchedUserList={searchedUserList}
      />
    </StUserSearchForTeamRegister>
  );
}
