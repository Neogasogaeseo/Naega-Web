import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import ErrorGuard from './ErrorGuard';
import { useLoginUser } from '@hooks/useLoginUser';
import { loginUserState } from '@stores/login-user';

function PrivateRoute() {
  const { isAuthenticated, isLoading, error } = useLoginUser();
  const loginUser = useRecoilValue(loginUserState);
  const navigate = useNavigate();
  console.log('isAuth', isAuthenticated);

  if (error) throw error;

  if (isLoading) return <></>;

  if (isAuthenticated) {
    if (loginUser.isJoined) return <Outlet />;
    else navigate('/join');
  }

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
