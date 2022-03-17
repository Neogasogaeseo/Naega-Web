import ScrollToTop from '@components/common/ScrollToTop';
import { useGoogleAnalytics } from '@hooks/useGoogleAnalytics';
import NeososeoFormPage from '@pages/NeososeoForm';
import NeososeoFormFinish from '@pages/NeososeoForm/Finish';
import { Suspense, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import NeogaRouter from './NeogaRouter';
import TeamRouter from './TeamRouter';
import UserRouter from './UserRouter';
import MyPageEditRouter from './MyPageEditRouter';
import ReactGA from 'react-ga';

const Router = () => {
  const location = useLocation();
  const { isGoogleAnalyticsLoaded } = useGoogleAnalytics();

  useEffect(() => {
    if (isGoogleAnalyticsLoaded) ReactGA.pageview(location.pathname + location.search);
  }, [isGoogleAnalyticsLoaded, location]);
  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<></>}>
        <Routes>
          <Route path="/*" element={<UserRouter />} />
          <Route path="/team/*" element={<TeamRouter />} />
          <Route path="/neoga/*" element={<NeogaRouter />} />
          <Route path="/neososeoform/:q/*" element={<NeososeoFormPage />} />
          <Route path="/neososeoform/:q/finish" element={<NeososeoFormFinish />} />
          <Route path="/edit/*" element={<MyPageEditRouter />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default Router;
