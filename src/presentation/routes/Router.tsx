import ScrollToTop from '@components/common/ScrollToTop';
import { useGoogleAnalytics } from '@hooks/useGoogleAnalytics';
import { Suspense, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import NeogaRouter from './NeogaRouter';
import TeamRouter from './TeamRouter';
import UserRouter from './UserRouter';
import ReactGA from 'react-ga';
import FormRouter from './FormRouter';
import { useLoginUser } from '@hooks/useLoginUser';
import PreferencesRouter from './PreferencesRouter';
import InAppBrowserEscape from '@components/InAppBrowserEscape';

const Router = () => {
  const location = useLocation();
  const { isGoogleAnalyticsLoaded } = useGoogleAnalytics();
  const { isAuthenticated, userID } = useLoginUser();

  useEffect(() => {
    if (isGoogleAnalyticsLoaded) ReactGA.pageview(location.pathname + location.search);
    if (isGoogleAnalyticsLoaded && isAuthenticated) {
      ReactGA.set({ userID });
    }
  }, [isGoogleAnalyticsLoaded, location, isAuthenticated]);
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
