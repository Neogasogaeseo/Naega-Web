import ScrollToTop from '@components/common/ScrollToTop';
import InAppBrowserEscape from '@components/InAppBrowserEscape';
import { useGoogleAnalytics } from '@hooks/useGoogleAnalytics';
import { Suspense, useEffect } from 'react';
import ReactGA from 'react-ga';
import { Route, Routes, useLocation } from 'react-router-dom';
import FormRouter from './FormRouter';
import NeogaRouter from './NeogaRouter';
import PreferencesRouter from './PreferencesRouter';
import TeamRouter from './TeamRouter';
import UserRouter from './UserRouter';

const Router = () => {
  const location = useLocation();
  const { isGoogleAnalyticsLoaded } = useGoogleAnalytics();

  useEffect(() => {
    if (isGoogleAnalyticsLoaded) {
      ReactGA.pageview(location.pathname + location.search);
    }
  }, [isGoogleAnalyticsLoaded, location]);

  return (
    <>
      <ScrollToTop />
      <InAppBrowserEscape />
      <Suspense fallback={<></>}>
        <Routes>
          <Route path="/*" element={<UserRouter />} />
          <Route path="/team/*" element={<TeamRouter />} />
          <Route path="/neoga/*" element={<NeogaRouter />} />
          <Route path="/neososeoform/:q/*" element={<FormRouter />} />
          <Route path="/preferences/*" element={<PreferencesRouter />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default Router;
