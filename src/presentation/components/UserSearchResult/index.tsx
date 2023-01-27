import { SearchedUserForEdit, SearchedUserForRegister } from '@api/types/team';
import UserSearchEmptyView from '@components/common/Empty/UserSearch';
import SearchedUserItem from '@components/SearchedUserItem';
import { StUserSearchResultForTeamRegister } from './style';

interface UserSearchResultProps {
  searchedUserList: SearchedUserForRegister[] | SearchedUserForEdit[] | null;
}

export default function UserSearchResult(props: UserSearchResultProps) {
  const { searchedUserList } = props;

  return (
    <StUserSearchResultForTeamRegister>
      <div>검색 결과</div>
      {searchedUserList === null ? (
        <></>
      ) : searchedUserList.length ? (
        searchedUserList.map((user) => {
          return <SearchedUserItem key={user.id} user={user} />;
        })
      ) : (
        <UserSearchEmptyView />
      )}
    </StUserSearchResultForTeamRegister>
  );
}
