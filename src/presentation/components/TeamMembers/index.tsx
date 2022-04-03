import { useState, useEffect } from 'react';
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil';

import { StTeamRegisterMembers, StTeamMembersSearchResultTitle } from './style';
import TeamMembersSearchBar from '@components/TeamMembersSearchBar';
import TeamMembersSearchedUser from '@components/TeamMembersSearchedUser';
import { selectedUserListState, userSearchWordState } from '@stores/team';
import { TeamMember } from '@api/types/team';
import { SearchedUser } from '@api/types/team';
import { imgEmptyProfile } from '@assets/images';
import { api } from '@api/index';
import UserSearchEmptyView from '@components/common/Empty/UserSearch';
import CommonNavigation from '@components/common/Navigation';

export default function TeamMembers({
  onClickSubmitButton: onClickSubmitButton,
}: {
  onClickSubmitButton: () => void;
}) {
  const [searchedUserList, setSearchedUserList] = useState<SearchedUser[]>([]);
  const [selectedUserList, setSelectedUserList] = useRecoilState(selectedUserListState);
  const userSearchWord = useRecoilValue(userSearchWordState);
  const [searchedUserListResponse, setSearchedUserListResponse] = useState<TeamMember[] | null>(
    null,
  );
  const resetUserSearchWord = useResetRecoilState(userSearchWordState);

  const mapSearchedUserList = () => {
    const idList = selectedUserList.map(({ id }) => id);
    searchedUserListResponse &&
      setSearchedUserList(
        searchedUserListResponse.map((user) => ({ ...user, isAdded: idList.includes(user.id) })),
      );
  };

  const searchUser = async () => {
    const searchedUserList = await api.teamService.getSearchedUserList(userSearchWord);
    setSearchedUserListResponse(searchedUserList);
    resetUserSearchWord();
  };

  const toggleMember = (
    id: number,
    profileId: string,
    profileName: string,
    profileImage: string,
    isAdded: boolean,
  ): void => {
    setSearchedUserList((current) =>
      current.map((member) =>
        member.profileId === profileId ? { ...member, isAdded: !member.isAdded } : { ...member },
      ),
    );
    setSelectedUserList((current) =>
      isAdded
        ? current.filter((member) => member.id !== id)
        : [...current, { id, profileId, profileName, profileImage }],
    );
  };

  useEffect(() => {
    searchedUserListResponse !== null && searchedUserListResponse.length && mapSearchedUserList();
  }, [searchedUserListResponse, selectedUserList]);

  return (
    <StTeamRegisterMembers>
      <CommonNavigation
        onClickBack={() => {
          onClickSubmitButton();
          resetUserSearchWord();
        }}
        title="팀원 추가"
        submitButton={{
          content: '완료',
          onClick: () => {
            onClickSubmitButton();
            resetUserSearchWord();
          },
        }}
      />
      <TeamMembersSearchBar onSubmitSearch={searchUser} />
      <StTeamMembersSearchResultTitle>검색결과</StTeamMembersSearchResultTitle>
      {searchedUserListResponse === null ? (
        <></>
      ) : searchedUserList.length ? (
        searchedUserList.map((user) => {
          const { id, profileId, profileName, profileImage = imgEmptyProfile, isAdded } = user;
          return (
            <TeamMembersSearchedUser
              key={id}
              onClickButton={() => toggleMember(id, profileId, profileName, profileImage, isAdded)}
              user={user}
            />
          );
        })
      ) : (
        <UserSearchEmptyView />
      )}
    </StTeamRegisterMembers>
  );
}
