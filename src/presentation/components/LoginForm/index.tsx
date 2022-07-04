import { KAKAO_AUTH_URL } from './OAuth';
import { StLoginForm, StLoginImg, StLoginButton, StLogin, StNoticeWrapper } from './style';
import { icKakao } from '@assets/icons/index';
import { imgLogo, imgLoginCharacter } from '@assets/images/index';

function LoginForm() {
  const loginWithKakao = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

  return (
    <StLoginForm>
      <img src={imgLogo} alt="로고" />
      <StLogin>너가소개서</StLogin>
      <StNoticeWrapper>
        나와 함께한 사람들이 써 주는
        <br />
        나의 소개서, 너가소개서
      </StNoticeWrapper>
      <StLoginImg src={imgLoginCharacter} />
      <StLoginButton onClick={() => loginWithKakao()}>
        <img src={icKakao} />
        <span>카카오로 계속하기</span>
      </StLoginButton>
    </StLoginForm>
  );
}

export default LoginForm;
