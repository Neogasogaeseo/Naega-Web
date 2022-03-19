import { NeososeoFormData } from '@api/types/neososeo-form';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { StButton } from '../style';
import { StNeososeoFormHome } from './style';

interface OutletContextProps {
  neososeoFormData: NeososeoFormData | undefined;
}

function NeososeoFormHome() {
  const { neososeoFormData } = useOutletContext<OutletContextProps>();
  const navigate = useNavigate();

  if (!neososeoFormData) return <></>;
  return (
    <StNeososeoFormHome>
      <div></div>
      <div>
        <StButton onClick={() => navigate('intro')}>답변 작성하기</StButton>
      </div>
    </StNeososeoFormHome>
  );
}

export default NeososeoFormHome;
