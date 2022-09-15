import { Navigate, Outlet } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import ErrorGuard from './ErrorGuard';
import { useLoginUser } from '@hooks/useLoginUser';
import { loginUserState } from '@stores/login-user';

function PrivateRoute() {
  const { isAuthenticated, isLoading, error } = useLoginUser();
  const loginUser = useRecoilValue(loginUserState);

  console.log('isAuthenticated', isAuthenticated);
  console.log('isLoading', isLoading);

  if (error) throw error;

  if (isLoading) return <></>;

  if (isAuthenticated) return loginUser.isJoined ? <Outlet /> : <Navigate to="/join" />;

  return <Navigate to="/" />;
}

function GuardedPrivateRoute() {
  return (
    <ErrorGuard>
      <PrivateRoute />
    </ErrorGuard>
  );
}

export default GuardedPrivateRoute;
