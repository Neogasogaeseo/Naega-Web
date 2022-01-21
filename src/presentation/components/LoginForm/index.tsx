import { icKakao } from '@assets/icons/index';
import { imgLogo, ImgLoginCharacter } from '@assets/images/index';
import { StLoginForm, StImgLogin, StLoginButton, StLogin, StNoticeWrapper } from './style';
import { KAKAO_AUTH_URL } from './OAuth';

function LoginForm() {
  function loginWithKakao() {
    window.location.href = KAKAO_AUTH_URL;
  }
  return (
    <StLoginForm>
      <img src={imgLogo} />
      <StLogin>너가소개서</StLogin>
      <StNoticeWrapper>
        나와 함께한 사람들이 써주는 <br />
        나의 소개서, 너가소개서
      </StNoticeWrapper>
      <StImgLogin>
        <img src={ImgLoginCharacter} />
      </StImgLogin>
      <StLoginButton onClick={loginWithKakao}>
        <img src={icKakao} />
        <p>카카오로 계속하기</p>
      </StLoginButton>
    </StLoginForm>
  );
}

export default LoginForm;
