import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { api } from '@api/index';
import { TeamInvite, TeamIssueCard, TeamMemberNoneId } from '@api/types/team';
import TeamInvitation from './Invitation';
import ProfileList from '@components/common/ProfileList';
import IssueCardList from '@components/common/IssueCardList';
import HomeTeamEmptyView from '@components/common/Empty/HomeTeam';
import { StTeamMain, StDivisionLine } from './style';

function HomeTeam() {
  const [inviteList, setInviteList] = useState<TeamInvite[] | null>(null);
  const [profileList, setProfileList] = useState<TeamMemberNoneId[] | null>(null);
  const [issueList, setIssueList] = useState<TeamIssueCard[] | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const { inviteList } = await api.teamService.getInviteInfo();
      setInviteList(inviteList);
      const { profileList } = await api.teamService.getTeamProfile();
      setProfileList(profileList);
      const { issueList } = await api.teamService.getMyTeamIssue();
      setIssueList(issueList);
    })();
    return () => {
      setInviteList(null);
      setProfileList(null);
      setIssueList(null);
    };
  }, []);

  return (
    <>
      <StTeamMain>
        {inviteList?.map((invitation) => (
          <TeamInvitation key={invitation.id} {...invitation} />
        ))}
        <h1>나와 함께하는 팀</h1>
        {profileList && (
          <ProfileList
            isSquare={true}
            profileList={profileList}
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
        {issueList && issueList.length ? (
          <IssueCardList
            issueList={issueList}
            onIssueClick={(teamID, issueNumber) => {
              navigate(`/team/${teamID}/${issueNumber}`);
            }}
          />
        ) : (
          <HomeTeamEmptyView />
        )}
      </StTeamMain>
    </>
  );
}

export default HomeTeam;
