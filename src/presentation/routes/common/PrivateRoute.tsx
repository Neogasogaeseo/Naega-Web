import { Navigate, Outlet } from 'react-router-dom';

import ErrorGuard from './ErrorGuard';
import { useLoginUser } from '@hooks/useLoginUser';

function PrivateRoute() {
  const { isAuthenticated, loginUser } = useLoginUser();

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
