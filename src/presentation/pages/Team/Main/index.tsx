// import { useParams } from 'react-router-dom';
import { StTeamMain, StTeamInfo, StCheckWrapper } from './style';
import { icGrayCheck, icPencil, icPlusMini } from '@assets/icons';

function TeamMain() {
  // const { teamID } = useParams();

  return (
    <StTeamMain>
      {/* 팀원소개서 메인, 팀 번호는 {teamID} */}
      <StTeamInfo>
        <img src="https://cdn.pixabay.com/photo/2021/07/13/11/34/cat-6463284_1280.jpg" />
        <div>
          <h1>솝트</h1>
          <h2>대학생연합 IT벤처창업 동아리</h2>
          <h3>
            <img />
            <span>4명</span>
            <span>|</span>
            <span>캐서린, 웬디, 콩콩이, 크왕</span>
          </h3>
        </div>
        <img src={icPencil} />
      </StTeamInfo>
      <button>
        <img src={icPlusMini} />
        이슈 추가
      </button>
      <StCheckWrapper>
        <img src={icGrayCheck} />
        나와 관련된 이슈만 보기
      </StCheckWrapper>
    </StTeamMain>
  );
}

export default TeamMain;
