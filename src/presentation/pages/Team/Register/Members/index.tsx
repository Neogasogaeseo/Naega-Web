import { StTeamRegisterMembers, StHeader, StTeamMembersSearchResultTitle } from './style';
import { IcBack } from '@assets/icons';
import TeamMembersSearchBar from '@components/TeamMembersSearchBar';
import TeamMembersSearchResult from '@components/TeamMembersSearchedMember';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { selectedMemberListState } from '@stores/team';
import { TeamMember } from '@api/types/team';
import { useEffect } from 'react';
import { SearchedMember } from '@api/types/team';
import { imgEmptyProfile } from '@assets/images';
import { useNavigate } from 'react-router';

export default function TeamRegisterMembers() {
  const navigate = useNavigate();
  const mockData: TeamMember[] = [
    {
      id: 1,
      profileId: 'minsu',
      profileName: '짠돌이',
      profileImage:
        'https://user-images.githubusercontent.com/73823388/149194885-8609eb8e-5255-491b-9594-84137caf7265.jpeg',
    },
    {
      id: 12,
      profileId: 'minsuminsu',
      profileName: '수민',
      profileImage:
        'https://user-images.githubusercontent.com/73823388/149194902-76a30e2d-684f-4a71-9503-734c818c5406.jpeg',
    },
  ];
  const [searchedMemberList, setSearchedMemberList] = useState<SearchedMember[]>([]);
  const [selectedMemberList, setSelectedMemberList] = useRecoilState(selectedMemberListState);

  const toggleMember = (
    id: number,
    profileId: string,
    profileName: string,
    profileImage: string,
    isAdded: boolean,
  ): void => {
    setSearchedMemberList((currentData) =>
      currentData.map((member) =>
        member.profileId === profileId ? { ...member, isAdded: !member.isAdded } : { ...member },
      ),
    );
    if (isAdded) {
      setSelectedMemberList((currentData) => currentData.filter((member) => member.id !== id));
    } else {
      setSelectedMemberList((currentData) => [
        ...currentData,
        { id, profileId, profileName, profileImage },
      ]);
    }
  };

  useEffect(() => {
    const idList = selectedMemberList.map(({ id }) => id);
    const tempData = [];
    for (const member of mockData) {
      tempData.push({ ...member, isAdded: idList.includes(member.id) });
    }
    setSearchedMemberList(tempData);
  }, []);
  useEffect(() => {
    const idList = selectedMemberList.map(({ id }) => id);
    const tempData = [];
    for (const member of mockData) {
      tempData.push({ ...member, isAdded: idList.includes(member.id) });
    }
    setSearchedMemberList(tempData);
  }, [selectedMemberList]);

  return (
    <StTeamRegisterMembers>
      <StHeader>
        <IcBack onClick={() => navigate(-1)} />
        <div>팀원 추가</div>
        <button onClick={() => navigate(-1)}>완료</button>
      </StHeader>
      <TeamMembersSearchBar />
      <StTeamMembersSearchResultTitle>검색결과</StTeamMembersSearchResultTitle>
      {searchedMemberList.map((member) => {
        const { id, profileId, profileName, profileImage = imgEmptyProfile, isAdded } = member;
        return (
          <TeamMembersSearchResult
            key={id}
            onClickButton={() => toggleMember(id, profileId, profileName, profileImage, isAdded)}
            member={member}
          />
        );
      })}
    </StTeamRegisterMembers>
  );
}
