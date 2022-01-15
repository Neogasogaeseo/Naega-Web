import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '@api/index';
import ProfileList from '@components/ProfileList';
import IssueCardList from '@components/common/IssueCardList';
import { StTeamMain, StInvitation, StDivisionLine, StEmptyView } from './style';
import { TeamInviteData, TeamIssueCard, TeamMember } from '@api/types/team';
import { icMessage } from '@assets/icons';
import { imgEmptyMain } from '@assets/images';

function HomeTeam() {
  const [profileListData, setProfileListData] = useState<TeamMember[] | null>(null);
  const [issueListData, setIssueListData] = useState<TeamIssueCard[] | null>(null);
  const [inviteData, setInviteData] = useState<TeamInviteData | null>(null);
  const [isValidating, setIsValidating] = useState(false);
  const [isInviting, setIsInviting] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      setIsValidating(true);
      const { profileListData } = await api.teamService.getTeamProfile();
      const { issueListData } = await api.teamService.getMyIssue();
      const teamInviteData = await api.teamService.getInviteInfo();
      setProfileListData(profileListData);
      setIssueListData(issueListData);
      setInviteData(teamInviteData);
      teamInviteData && setIsInviting(true);
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
              <span>{inviteData?.teamName}팀</span>의 초대
            </div>
            <div>
              <button onClick={() => setIsInviting(false)}>수락</button>
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
        {issueListData ? (
          <IssueCardList
            issueListData={issueListData}
            onIssueClick={(teamID, issueNumber) => {
              navigate(`/team/${teamID}/${issueNumber}`);
            }}
          />
        ) : (
          <StEmptyView>
            <img src={imgEmptyMain} />
            <div>아직 팀원소개서 컨텐츠가 없어요!</div>
            <div>팀이나 이슈를 추가해보세요.</div>
          </StEmptyView>
        )}
      </StTeamMain>
    </>
  );
}

export default HomeTeam;
