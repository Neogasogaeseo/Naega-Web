import { StJoinCompleteForm, StButton, StNoticeWrapper, StTitleWrapper } from './style';
import { imgParty } from '@assets/images';
import { useNavigate } from 'react-router-dom';
import { useLoginUser } from '@hooks/useLoginUser';

const JoinCompleteForm = () => {
  const navigate = useNavigate();
  const { username } = useLoginUser();

  return (
    <StJoinCompleteForm>
      <img src={imgParty} alt="" />
      <StTitleWrapper>
        <StNoticeWrapper>{username}님 환영합니다!</StNoticeWrapper>
        <StNoticeWrapper>회원가입이 완료되었어요</StNoticeWrapper>
      </StTitleWrapper>
      <p>이제 내 너가소개서를 받아보세요</p>
      <StButton
        type="submit"
        onClick={() => {
          navigate('/home');
        }}
      >
        확인
      </StButton>
    </StJoinCompleteForm>
  );
};

export default JoinCompleteForm;
