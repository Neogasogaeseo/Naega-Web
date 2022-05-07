import { useSetRecoilState } from 'recoil';
import React from 'react';

import { SearchedUserForRegister } from '@api/types/team';
import UserSearchEmptyView from '@components/common/Empty/UserSearch';
import CommonLoader from '@components/common/Loader';
import SearchedUserItem from '@components/SearchedUserItem';
import { selectedUserListState } from '@stores/team';
import { StUserSearchResultForTeamRegister } from './style';

interface UserSearchResultForRegisterProps {
  isFetchingNextPage: boolean;
  searchedUserList: SearchedUserForRegister[] | null;
}

export default function UserSearchResultForRegister(props: UserSearchResultForRegisterProps) {
  const { isFetchingNextPage, searchedUserList } = props;
  const setSelectedUserList = useSetRecoilState(selectedUserListState);
  return (
    <StUserSearchResultForTeamRegister>
      <div>검색 결과</div>
      {searchedUserList === null ? (
        <></>
      ) : searchedUserList.length ? (
        searchedUserList.map((user) => {
          return (
            <React.Fragment key={user.id}>
              <SearchedUserItem
                onClickButton={() =>
                  setSelectedUserList((current) =>
                    user.isSelected
                      ? current.filter((targetUser) => targetUser.id !== user.id)
                      : [...current, user],
                  )
                }
                user={user}
              />
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
