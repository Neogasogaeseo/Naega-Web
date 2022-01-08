import { useParams } from 'react-router-dom';
import ProfileList from '@components/ProfileList';
import { StTeamMainWrapper, StDivisionLine } from './style';

function TeamMain() {
  const { teamID } = useParams();
  return (
    <>
      <div>팀원소개서 메인, 팀 번호는 {teamID}</div>
      <StTeamMainWrapper>
        <h1>나의 팀</h1>
        <ProfileList type="team" />
        <StDivisionLine />
      </StTeamMainWrapper>
    </>
  );
}

export default TeamMain;
