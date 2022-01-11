import { StTeamRegisterMembers, StHeader } from './style';
import { IcBack } from '@assets/icons';

function TeamRegisterMembers() {
  return (
    <StTeamRegisterMembers>
      <StHeader>
        <IcBack />
        <div>팀원 추가</div>
        <button>완료</button>
      </StHeader>
    </StTeamRegisterMembers>
  );
}

export default TeamRegisterMembers;
