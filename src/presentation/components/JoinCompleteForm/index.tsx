import { StJoinCompleteForm, StButton, StNoticeWrapper, StTitleWrapper } from './style';
import { imgParty } from '@assets/images';

const JoinCompleteForm = () => {
  return (
    <StJoinCompleteForm>
      <img src={imgParty} alt="" />
      <StTitleWrapper>
        <StNoticeWrapper>강쥐님 어서오세요!</StNoticeWrapper>
        <StNoticeWrapper>회원가입이 완료되었어요</StNoticeWrapper>
      </StTitleWrapper>
      <p>너가소개서를 이용해보세요!</p>
      <StButton type="submit">확인</StButton>
    </StJoinCompleteForm>
  );
};

export default JoinCompleteForm;
