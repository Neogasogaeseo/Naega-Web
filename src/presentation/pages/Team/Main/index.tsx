import { useParams } from 'react-router-dom';
import { StTeamMain } from './style';

function TeamMain() {
  const { teamID } = useParams();
  return <StTeamMain>팀원소개서 메인, 팀 번호는 {teamID}</StTeamMain>;
}

export default TeamMain;
