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
      <StLogin>로그인</StLogin>
      <StNoticeWrapper>
        환영합니다! 너가소개서에 가입하고 <br />
        다양한 서비스를 이용해보세요
      </StNoticeWrapper>
      <StLoginButton onClick={loginWithKakao}>
        <img src={icKakao} />
        <p>카카오로 계속하기</p>
      </StLoginButton>
    </StLoginForm>
  );
}

export default LoginForm;
