import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { StAbsoluteWrapper, StBlackBlur, StWrapper, StSectionTitle, StButton } from './style';

function TeamIssueFeedback() {
  return (
    <>
      <StAbsoluteWrapper>
        <StBlackBlur />
        <StWrapper>
          <StSectionTitle>팀원을 선택하고 피드백을 남겨주세요</StSectionTitle>
          <StSectionTitle>키워드를 입력해주세요</StSectionTitle>
          <Link to="keyword">키워드 추가</Link>
          <StButton>이슈 추가</StButton>
        </StWrapper>
      </StAbsoluteWrapper>
      <Outlet />
    </>
  );
}

export default TeamIssueFeedback;
