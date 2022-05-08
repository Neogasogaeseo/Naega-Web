import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';

import { api } from '@api/index';
import TeamInvitation from './Invitation';
import TeamProfileSkeleton from '@components/common/Skeleton/TeamProfile';
import TeamIssueSkeleton from '@components/common/Skeleton/TeamIssue';
import ProfileList from '@components/common/ProfileList';
import IssueCardList from '@components/common/IssueCardList';
import HomeTeamEmptyView from '@components/common/Empty/HomeTeam';
import { StTeamMain, StDivisionLine } from './style';

function HomeTeam() {
  const navigate = useNavigate();
  const { data: teamInvitationData } = useQuery(
    'teamInvitationData',
    api.teamService.getInviteInfo,
  );
  const invitation = teamInvitationData?.inviteList[0];
  const { data: teamProfileData, isLoading: isTeamProfileDataLoading } = useQuery(
    'teamProfileData',
    api.teamService.getTeamProfile,
  );
  const profileList = teamProfileData?.profileList;
  const { data: teamIssueData, isLoading: isTeamIssueDataLoading } = useQuery(
    'teamIssueData',
    api.teamService.getMyTeamIssue,
  );
  const issueList = teamIssueData?.issueList;

  return (
    <>
      <StTeamMain>
        {invitation && <TeamInvitation {...invitation} />}
        {isTeamProfileDataLoading ? (
          <TeamProfileSkeleton />
        ) : (
          profileList && (
            <>
              <h1>나와 함께하는 팀</h1>
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
            </>
          )
        )}
        <StDivisionLine />
        {isTeamIssueDataLoading ? (
          <TeamIssueSkeleton />
        ) : (
          <>
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
          </>
        )}
      </StTeamMain>
    </>
  );
}

export default HomeTeam;
