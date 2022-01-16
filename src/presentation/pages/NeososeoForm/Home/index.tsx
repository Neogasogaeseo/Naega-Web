import { neososeoFormState } from '@stores/neososeo-form';
import { useRecoilValue } from 'recoil';
import { StButton, StNeososeoFormHome, StImage } from './style';

function NeososeoFormHome() {
  const neososeoFormData = useRecoilValue(neososeoFormState);
  if (!neososeoFormData) return <></>;
  return (
    <StNeososeoFormHome>
      <div>
        <StImage src={neososeoFormData.imageMain} alt={neososeoFormData.content} />
      </div>
      <StButton>답변 작성하기</StButton>
    </StNeososeoFormHome>
  );
}

export default NeososeoFormHome;
