import { useNavigate, useParams } from 'react-router-dom';
import { StTeamMain, StTeamInfo, StCheckWrapper } from './style';
import { icPerson, icPencil, icPlusMini, icCoralCheck, icGrayCheck } from '@assets/icons';
import IssueCardList from '@components/common/IssueCardList';
import { useState, useEffect } from 'react';
import { api } from '@api/index';
import { TeamIssueData } from '@api/types/team';

function TeamMain() {
  const [isChecked, setIsChecked] = useState(false);
  const [issueListData, setIssueListData] = useState<TeamIssueData | null>(null);
  const [isValidating, setIsValidating] = useState(false);

  useEffect(() => {
    (async () => {
      setIsValidating(true);
      const issueData = await api.teamService.getTeamIssue();
      setIssueListData(issueData);
      setIsValidating(false);
    })();
  }, []);

  useEffect(() => {
    return () => {
      setIssueListData(null);
    };
  }, []);

  const { teamID } = useParams();
  const navigate = useNavigate();

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
      <StTeamInfo>
        <img src="https://cdn.pixabay.com/photo/2021/07/13/11/34/cat-6463284_1280.jpg" />
        <div>
          <h1>솝트</h1>
          <h2>대학생연합 IT벤처창업 동아리</h2>
          <h3>
            <img src={icPerson} />
            <span>4명</span>
            <span>|</span>
            <span>캐서린, 웬디, 콩콩이, 크왕</span>
          </h3>
        </div>
        <img src={icPencil} onClick={updateTeam} />
      </StTeamInfo>
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
