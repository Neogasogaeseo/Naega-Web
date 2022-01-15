import { useNavigate, useParams } from 'react-router-dom';
import { StTeamMain, StTeamInfo, StCheckWrapper } from './style';
import { icPerson, icPlusMini, icCoralCheck, icGrayCheck } from '@assets/icons';
import IssueCardList from '@components/common/IssueCardList';
import { useState, useEffect } from 'react';
import { api } from '@api/index';
import { TeamInfoData, TeamIssueCard } from '@api/types/team';
import { imgEmptyProfile } from '@assets/images';
import TeamMemberPopup from './MemberPopup';

function TeamMain() {
  const [isMemberPopupOpened, setIsMemberPopupOpened] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [teamInfoData, setTeamInfoData] = useState<TeamInfoData | null>(null);
  const [issueListData, setIssueListData] = useState<TeamIssueCard[] | null>(null);
  const [isValidating, setIsValidating] = useState(false);
  const { teamID } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      setIsValidating(true);
      if (teamID === undefined) return;
      const teamDetailData = await api.teamService.getTeamInfo(teamID);
      const { issueListData } = await api.teamService.getTeamIssue(teamID);
      setTeamInfoData(teamDetailData);
      setIssueListData(issueListData);
      setIsValidating(false);
    })();

    return () => {
      setTeamInfoData(null);
      setIssueListData(null);
    };
  }, []);

  return (
    <StTeamMain>
      {isValidating && <div>로딩중</div>}
      {teamInfoData && (
        <StTeamInfo>
          <div>
            <button onClick={() => navigate(`/team/register`)}>수정</button>
          </div>
          <img src={teamInfoData.teamImage ?? imgEmptyProfile} />
          <div>
            <h1>{teamInfoData.teamName}</h1>
            <h3>
              <button onClick={() => setIsMemberPopupOpened(!isMemberPopupOpened)}>
                <img src={icPerson} />
                <span>{teamInfoData.teamMembers.length}명</span>
              </button>
              {teamInfoData.teamMembers.map((member, index) => (
                <span key={member.id}>
                  {member.profileName}
                  {index < teamInfoData.teamMembers.length - 1 ? ',\u00a0' : ''}
                </span>
              ))}
            </h3>
            {isMemberPopupOpened && <TeamMemberPopup members={teamInfoData.teamMembers} />}
            <h2>{teamInfoData.teamDescription}</h2>
          </div>
        </StTeamInfo>
      )}
      <button onClick={() => navigate(`/team/${teamID}/create`)}>
        <img src={icPlusMini} />
        이슈 추가
      </button>
      <StCheckWrapper>
        <button onClick={() => setIsChecked(!isChecked)}>
          <img src={isChecked ? icCoralCheck : icGrayCheck} />
        </button>
        나와 관련된 이슈만 보기
      </StCheckWrapper>
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
  );
}

export default TeamMain;
