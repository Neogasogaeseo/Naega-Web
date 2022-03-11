import { Outlet } from 'react-router-dom';
import ErrorGuard from './ErrorGuard';

function PublicRoute() {
  return <Outlet />;
}

function GuardedPublicRoute() {
  return (
    <ErrorGuard>
      <PublicRoute />
    </ErrorGuard>
  );
}

export default GuardedPublicRoute;
