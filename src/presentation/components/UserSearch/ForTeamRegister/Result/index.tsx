import { SearchedUser } from '@api/types/team';
import UserSearchEmptyView from '@components/common/Empty/UserSearch';
import CommonLoader from '@components/common/Loader';
import SearchedUserForTeamRegister from '@components/SearchedUser/ForTeamRegister';
import { searchedUserListState } from '@stores/team';
import { useSetRecoilState } from 'recoil';
import { StUserSearchResultForTeamRegister } from './style';

interface UserSearchResultForTeamRegisterProps {
  isFetchingNextPage: boolean;
  searchedUserList: SearchedUser[] | null;
}

export default function UserSearchResultForTeamRegister(
  props: UserSearchResultForTeamRegisterProps,
) {
  const { isFetchingNextPage, searchedUserList } = props;
  const setSelectedUserList = useSetRecoilState(searchedUserListState);
  return (
    <StUserSearchResultForTeamRegister>
      <div>검색 결과</div>
      {searchedUserList === null ? (
        <></>
      ) : searchedUserList.length ? (
        searchedUserList.map((user) => {
          return (
            <>
              <SearchedUserForTeamRegister
                key={user.profileID}
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
            </>
          );
        })
      ) : (
        <UserSearchEmptyView />
      )}
    </StUserSearchResultForTeamRegister>
  );
}
