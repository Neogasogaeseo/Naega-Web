import { icKakao } from '../../../assets/icons/index';
import { Logo } from '../../../assets/images/index';
import { StLoginWrapper, LoginButton, Login, NoticeWrapper } from './style';
import { KAKAO_AUTH_URL } from './OAuth';

const index = () => {
  function loginWithKakao() {
    window.location.href = KAKAO_AUTH_URL;
  }
  return (
    <StLoginWrapper>
      <img src={Logo} />
      <Login>로그인</Login>
      <NoticeWrapper>
        환영합니다! 너가소개서에 가입하고 <br />
        다양한 서비스를 이용해보세요
      </NoticeWrapper>
      <LoginButton onClick={loginWithKakao}>
        <img src={icKakao} />
        <p>카카오로 계속하기</p>
      </LoginButton>
    </StLoginWrapper>
  );
};

export default index;
