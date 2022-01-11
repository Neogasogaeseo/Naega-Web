import { StTeamMain, StDivisionLine } from './style';
import { useNavigate } from 'react-router-dom';
import { imgLogo } from '@assets/images/index';
import ProfileList from '@components/ProfileList';
import IssueCardList from '@components/common/IssueCardList';

function HomeTeam() {
  const profileListData = [
    {
      id: 1,
      profileImage: imgLogo,
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

  const issueListData = [
    {
      id: 1,
      category: '팀컬쳐',
      dates: '2021-12-27',
      content:
        '깃알못이라 IOS 프로젝트가 엉켜서 망가졌다 깃알못이라 IOS 프로젝트가 엉켜서 망가졌다',
      teamImage: imgLogo,
      teamName: '너가소개서',
      memberName: '강쥐',
    },
    {
      id: 2,
      category: '개발',
      dates: '2021-12-27',
      content:
        '깃알못이라 IOS 프로젝트가 엉켜서 망가졌다 깃알못이라 IOS 프로젝트가 엉켜서 망가졌다',
      teamName: '너가소개서',
      memberName: '강쥐',
    },
  ];

  const navigate = useNavigate();

  const handleProfileClick = (id: number) => {
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
        <h1>나와 관련된 이슈 확인</h1>
        <IssueCardList issueListData={issueListData} />
      </StTeamMain>
    </>
  );
}

export default HomeTeam;
