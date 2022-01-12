import ProfileList from '@components/ProfileList';
import { StTeamMain, StDivisionLine } from './style';
import { useNavigate } from 'react-router-dom';
import { imgLogo } from '@assets/images/index';

function HomeTeam() {
  const profileListData = [
    {
      id: '1',
      profileImage: imgLogo,
      profileName: '너가소개서',
    },
    {
      id: '2',
      profileName: 'SOPT',
    },
    {
      id: '3',
      profileName: '기업적디자인',
    },
    {
      id: '4',
      profileName: '기업적디자인',
    },
    {
      id: '5',
      profileName: '기업적디자인',
    },
    {
      id: '6',
      profileName: '기업적디자인',
    },
  ];

  const navigate = useNavigate();

  const handleProfileClick = (id: string) => {
    navigate(`/team/${id}`);
  };

  const handleAddClick = () => {
    navigate('/team/register');
  };

  return (
    <>
      <StTeamMain>
        <h1>나의 팀</h1>
        <ProfileList
          isSquare={true}
          profileListData={profileListData}
          onProfileClick={handleProfileClick}
          onAddClick={handleAddClick}
        />
        <StDivisionLine />
      </StTeamMain>
    </>
  );
}

export default HomeTeam;
