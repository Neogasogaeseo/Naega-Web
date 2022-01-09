import TeamRegisterTitle from '@components/TeamRegisterTitle';
import { StTeamRegister } from './style';
import { ImgTeamAdd } from '@assets/images';

function TeamRegister() {
  return (
    <StTeamRegister>
      <TeamRegisterTitle title="팀 등록하기" />
      <ImgTeamAdd />
    </StTeamRegister>
  );
}

export default TeamRegister;
