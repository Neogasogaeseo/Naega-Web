import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
const Preferences = lazy(() => import('@pages/Preferences/index'));
const Feedback = lazy(() => import('@pages/Preferences/Feedback'));
const ServiceCenter = lazy(() => import('@pages/Preferences/ServiceCenter'));
const PrivateRoute = lazy(() => import('./common/PrivateRoute'));

function PreferencesRouter() {
  return (
    <Routes>
      <Route path="/" element={<PrivateRoute />}>
        <Route path="/" element={<Preferences />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/servicecenter" element={<ServiceCenter />} />
      </Route>
    </Routes>
  );
}

export default PreferencesRouter;
