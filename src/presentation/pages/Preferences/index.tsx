import { useNavigate } from 'react-router';
import { useState } from 'react';
import { api } from '@api/index';
import { useLoginUser } from '@hooks/useLoginUser';
import CommonHeader from '@components/common/Header';
import CommonModal from '@components/common/Modal';
import {
  StPreferencesWrapper,
  StSection,
  StSectionItem,
  StSectionLink,
  StSectionTitle,
  StTitle,
  StWhiteBackground,
} from './style';

function PreferencesPage() {
  const { removeToken } = useLoginUser();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const resetUser = () => {
    removeToken();
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
          <StSectionItem
            onClick={() => navigate('/preferences/servicecenter', { state: { isError: false } })}
          >
            문의하기
          </StSectionItem>
        </StSection>
        <StSection>
          <StSectionTitle>후원</StSectionTitle>
          <StSectionLink href="https://qr.kakaopay.com/Ej7miTnbX1f608787" target="_blank">
            서버비 후원
          </StSectionLink>
          <StWhiteBackground style={{ height: 44 }} />
        </StSection>
        <StSection>
          <StSectionTitle>계정</StSectionTitle>
          <StSectionLink
            href="https://suzieep.notion.site/84b53946ac1b48f5a86ea4f9d6bf307c"
            target="_blank"
          >
            약관
          </StSectionLink>
          <StSectionItem onClick={resetUser}>로그아웃</StSectionItem>
          <StSectionItem onClick={() => setIsModalOpen(true)}>탈퇴</StSectionItem>
        </StSection>
      </StPreferencesWrapper>
      <CommonModal
        title="탈퇴하시겠습니까?"
        description={'계정을 탈퇴하면' + '\n' + '내 소개를 복원할 수 없습니다.'}
        isOpened={isModalOpen}
        onClickConfirm={() => {
          withdrawForever();
          setIsModalOpen(false);
        }}
        onClickCancel={() => setIsModalOpen(false)}
      />
    </>
  );
}

export default PreferencesPage;
