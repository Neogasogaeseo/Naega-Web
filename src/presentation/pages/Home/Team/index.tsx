import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '@api/index';
import ProfileList from '@components/ProfileList';
import IssueCardList from '@components/common/IssueCardList';
import { StTeamMain, StDivisionLine, StEmptyView } from './style';
import { TeamInvite, TeamIssueCard, TeamMember } from '@api/types/team';
import { imgEmptyMain } from '@assets/images';
import TeamInvitation from './Invitation';

function HomeTeam() {
  const [profileListData, setProfileListData] = useState<TeamMember[] | null>(null);
  const [issueListData, setIssueListData] = useState<TeamIssueCard[] | null>(null);
  const [inviteData, setInviteData] = useState<TeamInvite[] | null>(null);
  const [isValidating, setIsValidating] = useState(false);
  const [isInviting, setIsInviting] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      setIsValidating(true);
      const { profileListData } = await api.teamService.getTeamProfile();
      const { issueListData } = await api.teamService.getMyIssue();
      const { inviteListData } = await api.teamService.getInviteInfo();
      setProfileListData(profileListData);
      setIssueListData(issueListData);
      setInviteData(inviteListData);
      inviteListData && setIsInviting(true);
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
        {isInviting &&
          inviteData?.map((invitation) => <TeamInvitation key={invitation.id} {...invitation} />)}
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
