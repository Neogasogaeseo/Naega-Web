import ProfileList from '@components/ProfileList';
import { StTeamMainWrapper, StDivisionLine } from './style';

function HomeTeam() {
  return (
    <>
      <StTeamMainWrapper>
        <h1>나의 팀</h1>
        <ProfileList type="team" />
        <StDivisionLine />
      </StTeamMainWrapper>
    </>
  );
}

export default HomeTeam;
