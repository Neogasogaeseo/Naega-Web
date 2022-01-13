import { StTeamMain, StDivisionLine } from './style';
import { useNavigate } from 'react-router-dom';
import { imgLogo } from '@assets/images/index';
import ProfileList from '@components/ProfileList';
import IssueCardList from '@components/common/IssueCardList';
import { api } from '@api/index';
import { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { teamIssueCardState } from '@stores/team';

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

  const [issueListData, setIssueListData] = useRecoilState(teamIssueCardState);
  const [isValidating, setIsValidating] = useState(false);
  useEffect(() => {
    (async () => {
      setIsValidating(true);
      const data = await api.teamService.getTeamIssue();
      setIssueListData(data);
      setIsValidating(false);
    })();
  }, []);

  useEffect(() => {
    return () => setIssueListData(null);
  }, []);

  const navigate = useNavigate();

  const handleProfileClick = (id: string) => {
    navigate(`/team/${id}`);
  };

  const handleAddClick = () => {
    navigate('/team/register');
  };

  const handleIssueClick = (teamID: number, issueNumber: number) => {
    navigate(`/team/${teamID}/${issueNumber}`);
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
        {isValidating && <div>로딩중</div>}
        {issueListData && (
          <IssueCardList
            issueListData={issueListData.issueListData}
            onIssueClick={handleIssueClick}
          />
        )}
      </StTeamMain>
    </>
  );
}

export default HomeTeam;
