import { useLoginUser } from '@hooks/useLoginUser';
import { Navigate, Outlet } from 'react-router-dom';
import ErrorGuard from './ErrorGuard';

function PrivateRoute() {
  const { isAuthenticated, isLoading, error } = useLoginUser();
  if (error) throw error;
  return isLoading ? <></> : isAuthenticated ? <Outlet /> : <Navigate to="/" />;
}

function GuardedPrivateRoute() {
  return (
    <ErrorGuard>
      <PrivateRoute />
    </ErrorGuard>
  );
}

export default GuardedPrivateRoute;
