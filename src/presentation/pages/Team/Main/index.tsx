import { useNavigate, useParams } from 'react-router-dom';
import { StTeamMain, StTeamInfo, StCheckWrapper } from './style';
import { icPerson, icCoralCheck, icGrayCheck } from '@assets/icons';
import IssueCardList from '@components/common/IssueCardList';
import { useState, useEffect } from 'react';
import { api } from '@api/index';
import { TeamInfoData, TeamIssueCard } from '@api/types/team';
import { imgEmptyProfile } from '@assets/images';
import TeamMemberPopup from './MemberPopup';

function TeamMain() {
  const [isMemberPopupOpened, setIsMemberPopupOpened] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [teamInfoData, setTeamInfoData] = useState<TeamInfoData | undefined>(undefined);
  const [issueListData, setIssueListData] = useState<TeamIssueCard[] | null>(null);
  const { teamID } = useParams();
  const navigate = useNavigate();
  const checkMyIssue = () => setIsChecked((prev) => !prev);

  useEffect(() => {
    (async () => {
      if (teamID === undefined) return;
      const teamDetailData = await api.teamService.getTeamInfo(Number(teamID));
      setTeamInfoData(teamDetailData);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      if (teamID === undefined) return;
      const { issueListData } = await api.teamService.getTeamIssue(teamID);
      setIssueListData(issueListData);
    })();
  }, []);

  useEffect(() => {
    if (teamID === undefined) return;
    if (!isChecked) {
      (async () => {
        const { issueListData } = await api.teamService.getMyIssue(teamID);
        setIssueListData(issueListData);
      })();
    } else {
      (async () => {
        const { issueListData } = await api.teamService.getTeamIssue(teamID);
        setIssueListData(issueListData);
      })();
    }
  }, [isChecked, teamID]);

  return (
    <StTeamMain>
      {teamInfoData && (
        <StTeamInfo>
          <div>
            <button onClick={() => navigate(`/team/register`)}>수정</button>
          </div>
          <img src={teamInfoData.teamDetailData.teamDetail.teamImage ?? imgEmptyProfile} />
          <div>
            <h1>{teamInfoData.teamDetailData.teamDetail.teamName}</h1>
            <h3>
              <button onClick={() => setIsMemberPopupOpened(!isMemberPopupOpened)}>
                <img src={icPerson} />
                <span>{teamInfoData.teamDetailData.teamMemberCount}명</span>
                {isMemberPopupOpened && <TeamMemberPopup members={teamInfoData.teamDetailData.teamMemberList} />}
              </button>
              {teamInfoData.teamDetailData.teamMemberList.map((member, index) => (
                <span key={member.id}>
                  {member.profileName}
                  {index < teamInfoData.teamDetailData.teamMemberCount - 1 ? ',\u00a0' : ''}
                </span>
              ))}
            </h3>
            <h2>{teamInfoData.teamDetailData.teamDetail.teamDescription}</h2>
          </div>
        </StTeamInfo>
      )}
      <button onClick={() => navigate(`/team/${teamID}/create`)}>이슈 추가하기</button>
      <StCheckWrapper>
        <button onClick={() => checkMyIssue()}>
          <img src={isChecked ? icCoralCheck : icGrayCheck} />
        </button>
        나와 관련된 이슈만 보기
      </StCheckWrapper>
      {issueListData && (
        <IssueCardList
          issueListData={issueListData}
          onIssueClick={(teamID, issueNumber) => {
            navigate(`/team/${teamID}/${issueNumber}`);
          }}
        />
      )}
    </StTeamMain>
  );
}

export default TeamMain;
