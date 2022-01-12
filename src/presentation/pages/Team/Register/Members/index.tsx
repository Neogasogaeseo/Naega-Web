import { StTeamRegisterMembers, StHeader, StTeamMembersSearchResultTitle } from './style';
import { IcBack } from '@assets/icons';
import TeamMembersSearchBar from '@components/TeamMembersSearchBar';
import { TeamMember } from '@api/types/team';
import TeamMembersSearchResult from '@components/TeamMembersSearchResult';

function TeamRegisterMembers() {
  const searchedMemberList: TeamMember[] = [
    {
      id: 'minsu',
      profileName: '짠돌이',
      profileImage:
        'https://user-images.githubusercontent.com/73823388/149194885-8609eb8e-5255-491b-9594-84137caf7265.jpeg',
    },
    {
      id: 'minsuminsu',
      profileName: '수민',
      profileImage:
        'https://user-images.githubusercontent.com/73823388/149194902-76a30e2d-684f-4a71-9503-734c818c5406.jpeg',
    },
  ];
  return (
    <StTeamRegisterMembers>
      <StHeader>
        <IcBack />
        <div>팀원 추가</div>
        <button>완료</button>
      </StHeader>
      <TeamMembersSearchBar />
      <StTeamMembersSearchResultTitle>검색결과</StTeamMembersSearchResultTitle>
      {searchedMemberList.map((member) => (
        <TeamMembersSearchResult
          key={member.id}
          id={member.id}
          profileImage={member.profileImage}
          profileName={member.profileName}
        />
      ))}
    </StTeamRegisterMembers>
  );
}

export default TeamRegisterMembers;
