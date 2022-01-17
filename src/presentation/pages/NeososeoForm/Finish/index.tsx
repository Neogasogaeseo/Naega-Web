import { ImgAnswerDone } from '@assets/images';
import { useNavigate } from 'react-router-dom';
import { StButton } from '../style';
import { StBody, StNeososeoFinish } from './style';

function NeososeoFormFinish() {
  const navigate = useNavigate();

  return (
    <StNeososeoFinish>
      <StBody>
        <ImgAnswerDone />
        <div>답변이 전달되었어요</div>
        <div>너가소개서, 좀 더 둘러보실래요?</div>
      </StBody>
      <StButton onClick={() => navigate('/')}>서비스 둘러보기</StButton>
    </StNeososeoFinish>
  );
}

export default NeososeoFormFinish;
