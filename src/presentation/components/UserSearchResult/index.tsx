import React from 'react';

import { SearchedUserForEdit, SearchedUserForRegister } from '@api/types/team';
import UserSearchEmptyView from '@components/common/Empty/UserSearch';
import CommonLoader from '@components/common/Loader';
import SearchedUserItem from '@components/SearchedUserItem';
import { StUserSearchResultForTeamRegister } from './style';

interface UserSearchResultProps {
  isFetchingNextPage: boolean;
  searchedUserList: SearchedUserForRegister[] | SearchedUserForEdit[] | null;
}

export default function UserSearchResult(props: UserSearchResultProps) {
  const { isFetchingNextPage, searchedUserList } = props;

  return (
    <StUserSearchResultForTeamRegister>
      <div>검색 결과</div>
      {searchedUserList === null ? (
        <></>
      ) : searchedUserList.length ? (
        searchedUserList.map((user) => {
          return (
            <React.Fragment key={user.id}>
              <SearchedUserItem user={user} />
              {isFetchingNextPage && <CommonLoader />}
            </React.Fragment>
          );
        })
      ) : (
        <UserSearchEmptyView />
      )}
    </StUserSearchResultForTeamRegister>
  );
}
