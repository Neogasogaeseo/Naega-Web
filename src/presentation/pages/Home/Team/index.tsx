import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '@api/index';
import ProfileList from '@components/ProfileList';
import IssueCardList from '@components/common/IssueCardList';
import { StTeamMain, StInvitation, StDivisionLine } from './style';
import { TeamIssueCard, TeamMember } from '@api/types/team';
import { icMessage } from '@assets/icons';

function HomeTeam() {
  const [profileListData, setProfileListData] = useState<TeamMember[] | null>(null);
  const [issueListData, setIssueListData] = useState<TeamIssueCard[] | null>(null);
  const [isValidating, setIsValidating] = useState(false);
  const [isInviting, setIsInviting] = useState(true); // false로 변경
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      setIsValidating(true);
      const { profileListData } = await api.teamService.getTeamProfile();
      const { issueListData } = await api.teamService.getMyIssue();
      setProfileListData(profileListData);
      setIssueListData(issueListData);
      setIsValidating(false);
    })();

    return () => {
      setProfileListData(null);
      setIssueListData(null);
    };
  }, []);

  return (
    <>
      <StTeamMain>
        {isInviting && (
          <StInvitation>
            <div>
              <img src={icMessage} />
              <span>너가소개서너가소개서팀</span>의 초대
            </div>
            <div>
              <button onClick={() => setIsInviting(true)}>수락</button>
              <button onClick={() => setIsInviting(false)}>거절</button>
            </div>
          </StInvitation>
        )}
        <h1>나의 팀</h1>
        {isValidating && <div>로딩중</div>}
        {profileListData && (
          <ProfileList
            isSquare={true}
            profileListData={profileListData}
            onProfileClick={(id) => {
              navigate(`/team/${id}`);
            }}
            onAddClick={() => {
              navigate('/team/register');
            }}
          />
        )}
        <StDivisionLine />
        <h1>나와 관련된 이슈 확인</h1>
        {isValidating && <div>로딩중</div>}
        {issueListData && (
          <IssueCardList
            issueListData={issueListData}
            onIssueClick={(teamID, issueNumber) => {
              navigate(`/team/${teamID}/${issueNumber}`);
            }}
          />
        )}
      </StTeamMain>
    </>
  );
}

export default HomeTeam;
