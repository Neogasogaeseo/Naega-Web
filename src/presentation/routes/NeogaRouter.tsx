import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
const NeogaCreate = lazy(() => import('@pages/Neoga/Create'));
const NeogaResult = lazy(() => import('@pages/Neoga/Result'));
const FormDetail = lazy(() => import('@pages/Neoga/FormDetail'));
const NeogaLink = lazy(() => import('@pages/Neoga/Link'));
const PrivateRoute = lazy(() => import('./common/PrivateRoute'));

function NeogaRouter() {
  return (
    <Routes>
      <Route path="/" element={<PrivateRoute />}>
        <Route path="/create" element={<NeogaCreate />} />
        <Route path="/result" element={<NeogaResult />} />
        <Route path="/:formID/detail/form" element={<FormDetail />} />
        <Route path="/create/:formID/:viewMode" element={<NeogaLink />} />
      </Route>
    </Routes>
  );
}

export default NeogaRouter;
