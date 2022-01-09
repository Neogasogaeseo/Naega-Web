import ProfileList from '@components/ProfileList';
import { StTeamMainWrapper, StDivisionLine } from './style';
import { useNavigate } from 'react-router-dom';

function HomeTeam() {
  const navigate = useNavigate();

  const handleProfileClick = (id: number) => {
    navigate(`/team/${id}`);
  };

  const handleAddClick = () => {
    navigate('/register');
  };

  return (
    <>
      <StTeamMainWrapper>
        <h1>나의 팀</h1>
        <ProfileList
          isSquare={true}
          onProfileClick={handleProfileClick}
          onAddClick={handleAddClick}
        />
        <StDivisionLine />
      </StTeamMainWrapper>
    </>
  );
}

export default HomeTeam;
