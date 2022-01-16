import CommonInput from '@components/common/CommonInput';
import { neososeoFormState } from '@stores/neososeo-form';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { StButton, StNeososeoFormLayout, StNeososeoTitle, StSubTitle } from '../style';
import { StTextarea } from './style';

function NeososeoFormAnswer() {
  const neososeoFormData = useRecoilValue(neososeoFormState);
  const navigate = useNavigate();

  if (!neososeoFormData) return <></>;

  return (
    <StNeososeoFormLayout>
      <div>
        <StNeososeoTitle>
          <span>Q.</span>
          <span>{neososeoFormData.content}</span>
        </StNeososeoTitle>
        <StSubTitle>답변 내용을 입력해주세요.</StSubTitle>
        <StTextarea placeholder="직접 입력해주세요" />
        <StSubTitle>키워드를 입력해주세요.</StSubTitle>
        <CommonInput width="100%" placeholder="팀원을 표현하는 키워드를 입력해주세요." disabled />
      </div>
      <StButton onClick={() => navigate('intro')}>답변 작성하기</StButton>
    </StNeososeoFormLayout>
  );
}

export default NeososeoFormAnswer;
