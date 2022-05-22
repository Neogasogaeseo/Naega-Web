import CommonHeader from '@components/common/Header';
import {
  StPreferencesWrapper,
  StSection,
  StSectionItem,
  StSectionTitle,
  StTitle,
  StWhiteBackground,
} from './style';
import { useLoginUser } from '@hooks/useLoginUser';
import { api } from '@api/index';
import { useNavigate } from 'react-router';

function PreferencesPage() {
  const { removeAccessToken } = useLoginUser();
  const navigate = useNavigate();
  const resetUser = () => {
    removeAccessToken();
    navigate('/');
  };
  const withdrawForever = async () => {
    const response = await api.userService.postWithdraw();
    if (response.isSuccess) {
      resetUser();
    }
  };
  return (
    <>
      <CommonHeader />
      <StPreferencesWrapper>
        <StTitle>환경설정</StTitle>
        <StWhiteBackground style={{ height: 24 }} />
        <StSection>
          <StSectionTitle>고객센터</StSectionTitle>
          <StSectionItem onClick={() => navigate('/preferences/servicecenter')}>
            문의하기
          </StSectionItem>
        </StSection>
        <StSection>
          <StSectionTitle>폼 추가 요청</StSectionTitle>
          <StSectionItem onClick={() => navigate('/preferences/feedback')}>
            너소서 팀에게
          </StSectionItem>
        </StSection>
        <StSection>
          <StSectionTitle>후원</StSectionTitle>
          <StSectionItem>서버비 후원</StSectionItem>
          <StWhiteBackground style={{ height: 44 }} />
        </StSection>
        <StSection>
          <StSectionTitle>계정</StSectionTitle>
          <StSectionItem>약관</StSectionItem>
          <StSectionItem onClick={resetUser}>로그아웃</StSectionItem>
          <StSectionItem onClick={withdrawForever}>탈퇴</StSectionItem>
        </StSection>
      </StPreferencesWrapper>
    </>
  );
}

export default PreferencesPage;
