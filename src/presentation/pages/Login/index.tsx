import { KAKAO_AUTH_URL } from './OAuth';
import { StLogin, StLoginImg, StLoginButton, StTitle, StNoticeWrapper } from './style';
import { icKakao } from '@assets/icons/index';
import { imgLogo, imgLoginCharacter } from '@assets/images/index';

export default function Login() {
  const loginWithKakao = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

  return (
    <StLogin>
      <img src={imgLogo} alt="로고" />
      <StTitle>너가소개서</StTitle>
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
    </StLogin>
  );
}
