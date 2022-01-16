import { icKakao } from '@assets/icons/index';
import { imgLogo } from '@assets/images/index';
import { StLoginForm, StLoginButton, StLogin, StNoticeWrapper } from './style';
import { KAKAO_AUTH_URL } from './OAuth';

function LoginForm() {
  function loginWithKakao() {
    window.location.href = KAKAO_AUTH_URL;
  }
  return (
    <StLoginForm>
      <img src={imgLogo} />
      <StLogin>너를 통해 발견하는 나</StLogin>
      <StNoticeWrapper>
        나와 함께한 사람들이 써주는 <br />
        나의 소개서, 너가소개서
      </StNoticeWrapper>
      <StLoginButton onClick={loginWithKakao}>
        <img src={icKakao} />
        <p>카카오로 계속하기</p>
      </StLoginButton>
    </StLoginForm>
  );
}

export default LoginForm;
