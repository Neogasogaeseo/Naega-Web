import { NeososeoFormData } from '@api/types/neososeo-form';
import CommonHeader from '@components/common/Header';
import FormCard from '@components/common/FormCard';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { StButton } from '../style';
import { StNeososeoFormHome, StAnswerCount } from './style';

interface OutletContextProps {
  neososeoFormData: NeososeoFormData;
}

function NeososeoFormHome() {
  const { neososeoFormData } = useOutletContext<OutletContextProps>();
  const navigate = useNavigate();

  return (
    <StNeososeoFormHome>
      <CommonHeader />
      <div>
        <img src="https://github.com/seojinseojin.png" alt={neososeoFormData.userName} />
        <div>
          <div>{neososeoFormData.userName}님의 너가소개서</div>
          <div>2022-03-02</div>
        </div>
      </div>
      <div>
        <FormCard
          image={neososeoFormData.imageSub}
          title={neososeoFormData.title}
          content={neososeoFormData.content}
        >
          <StAnswerCount>{3}명이 답변했어요</StAnswerCount>
        </FormCard>
      </div>
      <div>
        <StButton onClick={() => navigate('intro')}>나도 답변 작성하기</StButton>
      </div>
    </StNeososeoFormHome>
  );
}

export default NeososeoFormHome;
