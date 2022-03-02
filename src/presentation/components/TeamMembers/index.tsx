import { useState, useEffect } from 'react';
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil';

import { StTeamRegisterMembers, StHeader, StTeamMembersSearchResultTitle } from './style';
import { IcBack } from '@assets/icons';
import TeamMembersSearchBar from '@components/TeamMembersSearchBar';
import TeamMembersSearchedUser from '@components/TeamMembersSearchedUser';
import { selectedUserListState, userSearchWordState } from '@stores/team';
import { TeamMember } from '@api/types/team';
import { SearchedUser } from '@api/types/team';
import { imgEmptyProfile } from '@assets/images';
import { api } from '@api/index';

export default function TeamMembers({
  onClickSubmitButton: onClickSubmitButton,
}: {
  onClickSubmitButton: () => void;
}) {
  const [searchedUserList, setSearchedUserList] = useState<SearchedUser[]>([]);
  const [selectedUserList, setSelectedUserList] = useRecoilState(selectedUserListState);
  const userSearchWord = useRecoilValue(userSearchWordState);
  const [searchedUserListResponse, setSearchedUserListResponse] = useState<TeamMember[]>([]);
  const resetUserSearchWord = useResetRecoilState(userSearchWordState);

  const mapSearchedUserList = () => {
    const idList = selectedUserList.map(({ id }) => id);
    if (searchedUserListResponse) {
      setSearchedUserList(
        searchedUserListResponse.map((user) => ({ ...user, isAdded: idList.includes(user.id) })),
      );
    } else {
      setSearchedUserList([]);
    }
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
    setSearchedUserList((currentData) =>
      currentData.map((member) =>
        member.profileId === profileId ? { ...member, isAdded: !member.isAdded } : { ...member },
      ),
    );
    if (isAdded) {
      setSelectedUserList((currentData) => currentData.filter((member) => member.id !== id));
    } else {
      setSelectedUserList((currentData) => [
        ...currentData,
        { id, profileId, profileName, profileImage },
      ]);
    }
  };

  useEffect(() => {
    mapSearchedUserList();
  }, [searchedUserListResponse, selectedUserList]);

  return (
    <StTeamRegisterMembers>
      <StHeader>
        <IcBack
          onClick={() => {
            onClickSubmitButton();
            resetUserSearchWord();
          }}
        />
        <div>팀원 추가</div>
        <button
          onClick={() => {
            onClickSubmitButton();
            resetUserSearchWord();
          }}
        >
          완료
        </button>
      </StHeader>
      <TeamMembersSearchBar onSubmitSearch={searchUser} />
      <StTeamMembersSearchResultTitle>검색결과</StTeamMembersSearchResultTitle>
      {searchedUserList.map((user) => {
        const { id, profileId, profileName, profileImage = imgEmptyProfile, isAdded } = user;
        return (
          <TeamMembersSearchedUser
            key={id}
            onClickButton={() => toggleMember(id, profileId, profileName, profileImage, isAdded)}
            user={user}
          />
        );
      })}
    </StTeamRegisterMembers>
  );
}
