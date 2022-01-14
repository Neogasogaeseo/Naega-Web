import { useNavigate, useParams } from 'react-router-dom';
import { StTeamMain, StTeamInfo, StCheckWrapper } from './style';
import { icPerson, icPencil, icPlusMini, icCoralCheck, icGrayCheck } from '@assets/icons';
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

  const openMemberPopup = () => {
    setIsMemberPopupOpened(!isMemberPopupOpened);
  };

  const updateTeam = () => {
    navigate(`/team/register`);
  };

  const createIssue = () => {
    navigate(`/team/${teamID}/create`);
  };

  const findMyIssue = () => {
    setIsChecked(!isChecked);
  };

  const handleIssueClick = (teamID: string, issueNumber: number) => {
    navigate(`/team/${teamID}/${issueNumber}`);
  };

  return (
    <StTeamMain>
      {isValidating && <div>로딩중</div>}
      {teamInfoData && (
        <StTeamInfo>
          <img src={teamInfoData.teamImage ?? imgEmptyProfile} />
          <div>
            <h1>{teamInfoData.teamName}</h1>
            <h2>{teamInfoData.teamDescription}</h2>
            <h3>
              <img src={icPerson} onClick={openMemberPopup} />
              <span>{teamInfoData.teamMembers.length}명</span>
              <span>|</span>
              {teamInfoData.teamMembers.map((member, index) => (
                <span key={member.memberID}>
                  {member.memberName}
                  {index < teamInfoData.teamMembers.length - 1 ? ',\u00a0' : ''}
                </span>
              ))}
            </h3>
            {isMemberPopupOpened && <TeamMemberPopup members={teamInfoData.teamMembers} />}
          </div>
          <img src={icPencil} onClick={updateTeam} />
        </StTeamInfo>
      )}
      <button onClick={createIssue}>
        <img src={icPlusMini} />
        이슈 추가
      </button>
      <StCheckWrapper>
        <button onClick={findMyIssue}>
          <img src={isChecked ? icCoralCheck : icGrayCheck} />
        </button>
        나와 관련된 이슈만 보기
      </StCheckWrapper>
      {isValidating && <div>로딩중</div>}
      {issueListData && (
        <IssueCardList issueListData={issueListData} onIssueClick={handleIssueClick} />
      )}
    </StTeamMain>
  );
}

export default TeamMain;
