import NeogaResultCard from '@components/common/NeogaResultCard';
import { StBanner, StForm, StHomeNeoga, StResult } from './styles';
import { icWhole } from '@assets/icons';

function HomeNeoga() {
  return (
    <StHomeNeoga>
      <StBanner>배너</StBanner>
      <StForm>
        <h1>너가소개서 설문 만들기</h1>
        <div>
          <h2>지인에게 궁금한 내 모습을 물어보세요</h2>
          <button>
            전체보기
            <img src={icWhole} />
          </button>
        </div>
      </StForm>
      <StResult>
        <h1>지연님이 만든 너가소개서</h1>
        <div>
          <h2>내가 생성한 너가소개서를 확인하세요!</h2>
          <button>
            전체보기
            <img src={icWhole} />
          </button>
        </div>
        <NeogaResultCard />
      </StResult>
    </StHomeNeoga>
  );
}

export default HomeNeoga;
