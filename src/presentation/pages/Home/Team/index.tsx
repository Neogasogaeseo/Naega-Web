import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useResetRecoilState } from 'recoil';
import {
  selectedUserListState,
  teamDescriptionState,
  teamImageState,
  teamNameState,
} from '@stores/team';
import { api } from '@api/index';
import { TeamInvite, TeamIssueCard, TeamMemberNoneId } from '@api/types/team';
import TeamInvitation from './Invitation';
import ProfileList from '@components/common/ProfileList';
import IssueCardList from '@components/common/IssueCardList';
import { StTeamMain, StDivisionLine, StEmptyView } from './style';
import { imgEmptyMain } from '@assets/images';

function HomeTeam() {
  const [inviteList, setInviteList] = useState<TeamInvite[] | null>(null);
  const [profileList, setProfileList] = useState<TeamMemberNoneId[] | null>(null);
  const [issueList, setIssueList] = useState<TeamIssueCard[] | null>(null);
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
              resetTeamInfo();
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
          <StEmptyView>
            <img src={imgEmptyMain} />
            <div>아직 팀원소개서 컨텐츠가 없어요</div>
            <div>팀이나 이슈를 추가해보세요</div>
          </StEmptyView>
        )}
      </StTeamMain>
    </>
  );
}

export default HomeTeam;
