import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '@api/index';
import ProfileList from '@components/ProfileList';
import IssueCardList from '@components/common/IssueCardList';
import { StTeamMain, StDivisionLine } from './style';
import { TeamProfileData, TeamIssueData } from '@api/types/team';

function HomeTeam() {
  const [profileListData, setProfileListData] = useState<TeamProfileData | null>(null);
  const [issueListData, setIssueListData] = useState<TeamIssueData | null>(null);
  const [isValidating, setIsValidating] = useState(false);
  useEffect(() => {
    (async () => {
      setIsValidating(true);
      const profileData = await api.teamService.getTeamProfile();
      const issueData = await api.teamService.getTeamIssue();
      setIssueListData(issueData);
      setProfileListData(profileData);
      setIsValidating(false);
    })();
  }, []);

  useEffect(() => {
    return () => {
      setProfileListData(null);
      setIssueListData(null);
    };
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
        {isValidating && <div>로딩중</div>}
        {profileListData && (
          <ProfileList
            isSquare={true}
            profileListData={profileListData.profileListData}
            onProfileClick={handleProfileClick}
            onAddClick={handleAddClick}
          />
        )}
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
