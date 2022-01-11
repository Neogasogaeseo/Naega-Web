import { StTeamRegisterMembers, StHeader } from './style';
import { IcBack } from '@assets/icons';
import TeamMembersSearchBar from '@components/TeamMembersSearchBar';

function TeamRegisterMembers() {
  return (
    <StTeamRegisterMembers>
      <StHeader>
        <IcBack />
        <div>팀원 추가</div>
        <button>완료</button>
      </StHeader>
      <TeamMembersSearchBar />
    </StTeamRegisterMembers>
  );
}

export default TeamRegisterMembers;
