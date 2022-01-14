import { useNavigate, useParams } from 'react-router-dom';
import { StTeamMain, StTeamInfo, StCheckWrapper } from './style';
import { icPerson, icPencil, icPlusMini, icCoralCheck, icGrayCheck } from '@assets/icons';
import IssueCardList from '@components/common/IssueCardList';
import { useState, useEffect } from 'react';
import { api } from '@api/index';
import { TeamInfoDetail, TeamIssueCard } from '@api/types/team';
import { imgEmptyProfile } from '@assets/images';

function TeamMain() {
  const [isChecked, setIsChecked] = useState(false);
  const [teamInfoData, setTeamInfoData] = useState<TeamInfoDetail[] | null>(null);
  const [issueListData, setIssueListData] = useState<TeamIssueCard[] | null>(null);
  const [isValidating, setIsValidating] = useState(false);
  const { teamID } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      setIsValidating(true);
      const { teamInfoData } = await api.teamService.getTeamInfo(teamID);
      const { issueListData } = await api.teamService.getTeamIssue(teamID);
      setTeamInfoData(teamInfoData);
      setIssueListData(issueListData);
      setIsValidating(false);
    })();

    return () => {
      setTeamInfoData(null);
      setIssueListData(null);
    };
  }, []);

  const createIssue = () => {
    navigate(`/team/${teamID}/create`);
  };

  const updateTeam = () => {
    navigate(`/team/register`);
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
          <img src={teamInfoData?.[Number(teamID)].teamImage ?? imgEmptyProfile} />
          <div>
            <h1>{teamInfoData?.[Number(teamID)].teamName}</h1>
            <h2>{teamInfoData?.[Number(teamID)].teamDescription}</h2>
            <h3>
              <img src={icPerson} />
              <span>{teamInfoData?.[Number(teamID)].teamMembers.length}명</span>
              <span>|</span>
              {teamInfoData?.[Number(teamID)].teamMembers.map((member, index) => (
                <span key={member.memberID}>
                  {member.memberName}
                  {index < teamInfoData?.[Number(teamID)].teamMembers.length - 1 ? ',\u00a0' : ''}
                </span>
              ))}
            </h3>
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
          {isChecked ? <img src={icCoralCheck} /> : <img src={icGrayCheck} />}
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
