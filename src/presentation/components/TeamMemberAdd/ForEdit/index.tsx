import { useCallback, useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { useInfiniteQuery } from 'react-query';

import CommonNavigation from '@components/common/Navigation';
import CommonInput from '@components/common/Input';
import { icSearch } from '@assets/icons';
import { StPaddingWrapper, StTeamMemberAdd } from './style';
import { selectedUserListState } from '@stores/team';
import MutableKeywordList from '@components/common/Keyword/MutableList';
import { COLOR } from '@styles/common/color';
import UserSearchResult from '../../UserSearchResult';
import { useScrollHeight } from '@hooks/useScrollHeight';
import { api } from '@api/index';
import { SEARCHED_USER_PAGE } from '@utils/constant';
import { SearchedUserForEdit, UserState } from '@api/types/team';

interface TeamMemberAddForEditProps {
  teamID: number;
  onClickSubmitButton: () => void;
  onClickBackButton: () => void;
}

export default function TeamMemberAddForEdit(props: TeamMemberAddForEditProps) {
  const { teamID, onClickSubmitButton: submit, onClickBackButton } = props;
  const [inputValue, setInputValue] = useState('');
  const [searchWord, setSearchWord] = useState('');
  const [selectedUserList, setSelectedUserList] = useRecoilState(selectedUserListState);
  const { isBottomReached, isInitialState: isInitialScroll } = useScrollHeight();
  const [searchedUserList, setSearchedUserList] = useState<SearchedUserForEdit[] | null>(null);

  const searchUserByPage = useCallback(
    async ({ pageParam = 0 }) => {
      const response = await api.teamService.getSearchedUserListForEdit(
        teamID,
        searchWord,
        pageParam,
      );
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
    enabled: searchWord !== '',
    retry: 1,
  });

  const getState = (isConfirmed: boolean | null, id: number): UserState => {
    switch (isConfirmed) {
      case true:
        return 'MEMBER';
      case false:
        return 'INVITED';
      case null:
        return selectedUserList.map(({ id }) => id).includes(id) ? 'WILL_INVITE' : 'NONE';
    }
  };

  const getSearchedUserList = (): SearchedUserForEdit[] | null => {
    if (!searchedUserListResponseByPage) return null;
    const searchedUserListResponse = searchedUserListResponseByPage.pages.flatMap(
      (page) => page.result,
    );
    if (!searchedUserListResponse) return [];
    return searchedUserListResponse.map((user) => {
      const { id, name, profileID, image } = user;
      return { id, name, profileID, image, state: getState(user.isConfirmed, user.id) };
    });
  };

  useEffect(() => {
    if (!isInitialScroll) fetchNextPage();
  }, [isBottomReached, isInitialScroll]);

  useEffect(() => {
    const searchedUserList = getSearchedUserList();
    setSearchedUserList(searchedUserList);
  }, [searchedUserListResponseByPage, selectedUserList]);

  return (
    <StTeamMemberAdd>
      <CommonNavigation
        title="팀원 추가"
        onClickBack={onClickBackButton}
        submitButton={{
          content: '완료',
          onClick: submit,
        }}
      />
      <StPaddingWrapper>
        <CommonInput
          value={inputValue}
          onChange={(value) => setInputValue(value)}
          onSubmit={() => {
            if (inputValue) setSearchWord(inputValue);
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
      <UserSearchResult
        isFetchingNextPage={isFetchingNextPage}
        searchedUserList={searchedUserList}
      />
    </StTeamMemberAdd>
  );
}
