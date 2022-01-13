import { useNavigate, useParams } from 'react-router-dom';
import { StTeamMain, StTeamInfo, StCheckWrapper } from './style';
import { icPerson, icPencil, icPlusMini, icCoralCheck, icGrayCheck } from '@assets/icons';
import IssueCardList from '@components/common/IssueCardList';
import { useState, useEffect } from 'react';
import { api } from '@api/index';
import { TeamInfoData, TeamIssueData } from '@api/types/team';

function TeamMain() {
  const [isChecked, setIsChecked] = useState(false);
  const [teamInfoData, setTeamInfoData] = useState<TeamInfoData | null>(null);
  const [issueListData, setIssueListData] = useState<TeamIssueData | null>(null);
  const [isValidating, setIsValidating] = useState(false);
  const { teamID } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      setIsValidating(true);
      const infoData = await api.teamService.getTeamInfo(teamID);
      const issueData = await api.teamService.getTeamIssue(teamID);
      setTeamInfoData(infoData);
      setIssueListData(issueData);
      setIsValidating(false);
    })();
  }, []);

  useEffect(() => {
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

  const team = teamInfoData?.teamInfoData[Number(teamID)];
  const members = teamInfoData?.teamInfoData[Number(teamID)].teamMembers;
  const names = members?.map((member, index) => (
    <span key={member.memberID}>
      {member.memberName}
      {index < members.length - 1 ? ',\u00a0' : ''}
    </span>
  ));

  return (
    <StTeamMain>
      {team && (
        <StTeamInfo>
          <img src={team.teamImage} />
          <div>
            <h1>{team.teamName}</h1>
            <h2>{team.teamDescription}</h2>
            <h3>
              <img src={icPerson} />
              <span>{team.teamMembers.length}명</span>
              <span>|</span>
              {names}
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
        <IssueCardList
          issueListData={issueListData.issueListData}
          onIssueClick={handleIssueClick}
        />
      )}
    </StTeamMain>
  );
}

export default TeamMain;
