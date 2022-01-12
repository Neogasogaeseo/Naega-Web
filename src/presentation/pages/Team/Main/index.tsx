import { imgLogo, imgEmptyProfile } from '@assets/images';
import IssueCardList from '@components/common/IssueCardList';
import { useParams } from 'react-router-dom';
import { StTeamMain } from './style';

function TeamMain() {
  const { teamID } = useParams();
  const issueListData = [
    {
      id: 1,
      category: '팀컬쳐',
      dates: '2021-12-27',
      content: '깃알못이라 IOS 프로젝트가 엉켜서 망가졌다',
      issueMembers: [imgLogo, imgLogo, imgLogo, imgLogo, imgLogo],
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
      issueMembers: [imgEmptyProfile, imgEmptyProfile],
      teamName: '너가소개서',
      memberName: '강쥐',
    },
  ];

  return (
    <StTeamMain>
      팀원소개서 메인, 팀 번호는 {teamID}
      <IssueCardList issueListData={issueListData} />
    </StTeamMain>
  );
}

export default TeamMain;
