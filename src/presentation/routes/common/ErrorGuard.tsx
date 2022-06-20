import React from 'react';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';
import { QueryErrorResetBoundary, useQueryErrorResetBoundary } from 'react-query';
import styled from 'styled-components';

import { CustomError } from '@api/types/errors';
import { CORAL_MAIN_BUTTON } from '@styles/common/button';
import { COLOR } from '@styles/common/color';
import { FONT_STYLES } from '@styles/common/font-style';
import { IcPaperAirplane } from '@assets/icons';
import { Link } from 'react-router-dom';

function ErrorFallback({ error }: FallbackProps) {
  const errorWithCode = error as CustomError;
  const isErrorCode = typeof errorWithCode.code === 'number';
  return (
    <StErrorFallback>
      {isErrorCode ? (
        <div>
          <h1>{errorWithCode.code}</h1>
          <h1>{error.message}</h1>
          <StDescription>{errorWithCode.description}</StDescription>
        </div>
      ) : (
        <div>
          <h1>ERROR</h1>
          <h1>문제가 생겼습니다</h1>
        </div>
      )}
      <div>
        <Link to="/preferences/feedback">
          <IcPaperAirplane />
          <div>피드백을 보내주시겠어요?</div>
        </Link>
        <Link to="/">홈으로 돌아가기</Link>
      </div>
    </StErrorFallback>
  );
}

function ErrorGuard({ children }: { children: React.ReactNode }) {
  const { reset } = useQueryErrorResetBoundary();
  return (
    <QueryErrorResetBoundary>
      <ErrorBoundary fallbackRender={ErrorFallback} onReset={reset}>
        {children}
      </ErrorBoundary>
    </QueryErrorResetBoundary>
  );
}

export default ErrorGuard;

const StErrorFallback = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  & > *:first-child {
    display: flex;
    flex-direction: column;
    align-items: center;
    & > *:first-child {
      ${FONT_STYLES.M_38_TITLE}
      color: ${COLOR.CORAL_MAIN};
    }
    & > *:nth-child(2) {
      font-weight: 600;
      font-size: 19px;
      color: ${COLOR.GRAY_8};
      margin-top: 36px;
    }
    margin-top: 240px;
  }
  & > *:last-child {
    width: 100%;
    margin-bottom: 48px;
    display: flex;
    flex-direction: column;
    align-items: center;
    & > *:first-child {
      display: flex;
      align-items: center;
      background: rgba(255, 240, 240, 0.4);
      border-radius: 2000px;
      width: 212px;
      height: 38px;
      padding: 8px 16px;
      ${FONT_STYLES.R_15_BODY}
      color: ${COLOR.CORAL_MAIN};
      margin-bottom: 18px;
      & > *:first-child {
        margin-right: 6px;
      }
    }
    & > *:last-child {
      width: calc(100% - 40px);
      padding: 21px 0;
      text-align: center;
      border-radius: 16px;
      ${FONT_STYLES.M_16_TITLE}
      ${CORAL_MAIN_BUTTON}
    }
  }
`;

const StDescription = styled.div`
  margin-top: 20px;
  ${FONT_STYLES.R_15_BODY}
  line-height: 143.99%;
  color: ${COLOR.GRAY_5};
  text-align: center;
  white-space: pre-line;
`;
