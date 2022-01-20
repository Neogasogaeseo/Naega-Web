import Question from '@components/common/Question';
import { neososeoFormState } from '@stores/neososeo-form';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { StButton } from '../style';
import { StNeososeoFormHome } from './style';

function NeososeoFormHome() {
  const neososeoFormData = useRecoilValue(neososeoFormState);
  const navigate = useNavigate();

  if (!neososeoFormData) return <></>;
  return (
    <StNeososeoFormHome>
      <div>
        <Question content={neososeoFormData.content} />
      </div>
      <div>
        <StButton onClick={() => navigate('intro')}>답변 작성하기</StButton>
      </div>
    </StNeososeoFormHome>
  );
}

export default NeososeoFormHome;
