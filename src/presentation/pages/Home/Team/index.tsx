import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '@api/index';
import ProfileList from '@components/ProfileList';
import IssueCardList from '@components/common/IssueCardList';
import { StTeamMain, StDivisionLine, StEmptyView } from './style';
import { TeamInvite, TeamIssueCard, TeamMemberNoneId } from '@api/types/team';
import { imgEmptyMain } from '@assets/images';
import TeamInvitation from './Invitation';
import {
  selectedUserListState,
  teamDescriptionState,
  teamImageState,
  teamNameState,
} from '@stores/team';
import { useResetRecoilState } from 'recoil';

function HomeTeam() {
  const [profileListData, setProfileListData] = useState<TeamMemberNoneId[] | null>(null);
  const [issueListData, setIssueListData] = useState<TeamIssueCard[] | null>(null);
  const [inviteData, setInviteData] = useState<TeamInvite[] | null>(null);
  const resetImage = useResetRecoilState(teamImageState);
  const resetName = useResetRecoilState(teamNameState);
  const resetDescription = useResetRecoilState(teamDescriptionState);
  const resetSelectedUserList = useResetRecoilState(selectedUserListState);
  const navigate = useNavigate();

  const resetTeamInfo = () => {
    resetImage();
    resetName();
    resetDescription();
    resetSelectedUserList();
  };

  useEffect(() => {
    (async () => {
      const { profileListData } = await api.teamService.getTeamProfile();
      setProfileListData(profileListData);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const { issueListData } = await api.teamService.getMyTeamIssue();
      setIssueListData(issueListData);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const { inviteListData } = await api.teamService.getInviteInfo();
      setInviteData(inviteListData);
    })();
  }, []);

  return (
    <>
      <StTeamMain>
        {inviteData?.map((invitation) => (
          <TeamInvitation key={invitation.id} {...invitation} />
        ))}
        <h1>내가 함께하는 팀</h1>
        {profileListData && (
          <ProfileList
            isSquare={true}
            profileListData={profileListData}
            onProfileClick={(id) => {
              navigate(`/team/${id}`);
            }}
            onAddClick={() => {
              resetTeamInfo();
              navigate('/team/register');
            }}
          />
        )}
        <StDivisionLine />
        <h1>나와 관련된 이슈 확인</h1>
        {issueListData && issueListData.length ? (
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
