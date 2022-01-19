import { StJoinCompleteForm, StButton, StNoticeWrapper, StTitleWrapper } from './style';
import { imgParty } from '@assets/images';
import { useNavigate } from 'react-router-dom';

const JoinCompleteForm = () => {
  const navigate = useNavigate();
  return (
    <>
      <StJoinCompleteForm>
        <img src={imgParty} alt="" />
        <StTitleWrapper>
          <StNoticeWrapper>강쥐님 어서오세요!</StNoticeWrapper>
          <StNoticeWrapper>회원가입이 완료되었어요</StNoticeWrapper>
        </StTitleWrapper>
        <p>너가소개서를 이용해보세요!</p>
      </StJoinCompleteForm>
      <StButton
        type="submit"
        onClick={() => {
          navigate('/home');
        }}
      >
        확인
      </StButton>
    </>
  );
};

export default JoinCompleteForm;
