import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';

import { api } from '@api/index';
import TeamInvitation from './Invitation';
import ProfileList from '@components/common/ProfileList';
import IssueCardList from '@components/common/IssueCardList';
import HomeTeamEmptyView from '@components/common/Empty/HomeTeam';
import { StTeamMain, StDivisionLine } from './style';

function HomeTeam() {
  const navigate = useNavigate();
  const { data: teamInviteData } = useQuery('teamInviteData', api.teamService.getInviteInfo);
  const invitation = teamInviteData?.inviteList[0];
  const { data: teamProfileData } = useQuery('teamProfileData', api.teamService.getTeamProfile);
  const profileList = teamProfileData?.profileList;
  const { data: teamIssueData } = useQuery('teamIssueData', api.teamService.getMyTeamIssue);
  const issueList = teamIssueData?.issueList;

  return (
    <>
      <StTeamMain>
        {invitation && <TeamInvitation {...invitation} />}
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
