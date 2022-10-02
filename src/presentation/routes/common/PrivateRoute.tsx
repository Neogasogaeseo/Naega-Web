import { Navigate, Outlet } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import ErrorGuard from './ErrorGuard';
import { useLoginUser } from '@hooks/useLoginUser';
import { loginUserState } from '@stores/login-user';

function PrivateRoute() {
  const { isAuthenticated } = useLoginUser();
  const loginUser = useRecoilValue(loginUserState);

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
