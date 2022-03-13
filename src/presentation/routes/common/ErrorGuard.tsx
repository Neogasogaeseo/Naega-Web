import { CustomError } from '@api/types/errors';
import React from 'react';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';
import { QueryErrorResetBoundary, useQueryErrorResetBoundary } from 'react-query';
import { Link } from 'react-router-dom';

function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  const errorWithCode = error as CustomError;
  if (typeof errorWithCode.code === 'number')
    return (
      <div>
        <h1>{errorWithCode.code}</h1>
        <h1>{error.message}</h1>
        <button onClick={resetErrorBoundary}>다시 시도하기</button>
        <Link to="/">홈으로 돌아가기</Link>
      </div>
    );
  else return <div>문제가 생겼습니다..</div>;
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
