import { StJoinCompleteForm, StButton, StNoticeWrapper, StTitleWrapper } from './style';
import { imgParty } from '@assets/images';
import { useNavigate } from 'react-router-dom';
import {loginUserState} from '@stores/login-user';
import { useRecoilState } from 'recoil';

const JoinCompleteForm = () => {
  const navigate = useNavigate();
  const [loginUser] = useRecoilState(loginUserState);

  return (
    <>
      <StJoinCompleteForm>
        <img src={imgParty} alt="" />
        <StTitleWrapper>
          <StNoticeWrapper>{loginUser.username}님 어서오세요!</StNoticeWrapper>
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
