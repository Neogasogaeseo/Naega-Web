import ProfileList from '@components/ProfileList';
import { StTeamMainWrapper, StDivisionLine } from './style';
import { useNavigate } from 'react-router-dom';
import { Logo } from '@assets/images/index';

function HomeTeam() {
  const profileListData = [
    {
      id: 1,
      profileImage: Logo,
      profileName: '너가소개서',
    },
    {
      id: 2,
      profileName: 'SOPT',
    },
    {
      id: 3,
      profileName: '기업적디자인',
    },
    {
      id: 4,
      profileName: '기업적디자인',
    },
    {
      id: 5,
      profileName: '기업적디자인',
    },
    {
      id: 6,
      profileName: '기업적디자인',
    },
  ];

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
          profileListData={profileListData}
          onProfileClick={handleProfileClick}
          onAddClick={handleAddClick}
        />
        <StDivisionLine />
      </StTeamMainWrapper>
    </>
  );
}

export default HomeTeam;
