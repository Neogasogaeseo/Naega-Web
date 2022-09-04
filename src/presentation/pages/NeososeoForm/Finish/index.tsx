import { ImgAnswerDone } from '@assets/images';
import GoogleAdsense from '@components/GoogleAdsense';
import { useNavigate } from 'react-router-dom';
import { StButton } from '../style';
import { StBody, StNeososeoFinish } from './style';

function NeososeoFormFinish() {
  const navigate = useNavigate();

  return (
    <StNeososeoFinish>
      <GoogleAdsense />
      <StBody>
        <ImgAnswerDone />
        <div>답변이 전달되었어요</div>
        <div>내 너가소개서도 받아보세요.</div>
      </StBody>
      <StButton onClick={() => navigate('/')}>내 너가소개서도 받아보기</StButton>
    </StNeososeoFinish>
  );
}

export default NeososeoFormFinish;
