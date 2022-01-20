import { useLoginUser } from '@hooks/useLoginUser';
import { Navigate, Outlet } from 'react-router-dom';

function PrivateRoute() {
  const { isAuthenticated, isLoading } = useLoginUser();
  return isLoading ? <></> : isAuthenticated ? <Outlet /> : <Navigate to="/" />;
}

export default PrivateRoute;
