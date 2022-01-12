import { imgLogo } from '@assets/images';
import IssueCardList from '@components/common/IssueCardList';
import { useParams, useNavigate } from 'react-router-dom';
import { StTeamMain } from './style';

function TeamMain() {
  const { teamID } = useParams();
  const issueListData = [
    {
      id: 1,
      issueNumber: 1,
      category: '개발',
      dates: '2021-12-27',
      content:
        '깃알못이라 IOS 프로젝트가 엉켜서 망가졌다 깃알못이라 IOS 프로젝트가 엉켜서 망가졌다',
      issueMembers: [
        'https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_1280.jpg',
        'https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_1280.jpg',
        'https://cdn.pixabay.com/photo/2021/07/13/11/34/cat-6463284_1280.jpg',
        'https://cdn.pixabay.com/photo/2021/07/13/11/34/cat-6463284_1280.jpg',
        'https://cdn.pixabay.com/photo/2021/07/13/11/34/cat-6463284_1280.jpg',
      ],
      teamName: '너가소개서',
      memberName: '강쥐',
    },
    {
      id: 2,
      issueNumber: 2,
      issueCardImage: 'https://cdn.pixabay.com/photo/2019/03/28/10/19/sunset-4086848_1280.jpg',
      category: '팀컬쳐',
      dates: '2021-12-27',
      content: '깃알못이라 IOS 프로젝트가 엉켜서 망가졌다',
      issueMembers: [
        'https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_1280.jpg',
        'https://cdn.pixabay.com/photo/2021/07/13/11/34/cat-6463284_1280.jpg',
      ],
      teamImage: imgLogo,
      teamName: '너가소개서',
      memberName: '강쥐',
    },
  ];

  const navigate = useNavigate();
  const handleIssueClick = (id: number, issueNumber: number) => {
    navigate(`/team/${id}/${issueNumber}`);
  };

  return (
    <StTeamMain>
      팀원소개서 메인, 팀 번호는 {teamID}
      <IssueCardList issueListData={issueListData} onIssueClick={handleIssueClick} />
    </StTeamMain>
  );
}

export default TeamMain;
