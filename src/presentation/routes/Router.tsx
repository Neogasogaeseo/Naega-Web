import ScrollToTop from '@components/common/ScrollToTop';
import NeososeoFormPage from '@pages/NeososeoForm';
import NeososeoFormFinish from '@pages/NeososeoForm/Finish';
import { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NeogaRouter from './NeogaRouter';
import TeamRouter from './TeamRouter';
import UserRouter from './UserRouter';

const Router = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<></>}>
        <Routes>
          <Route path="/*" element={<UserRouter />} />
          <Route path="/team/*" element={<TeamRouter />} />
          <Route path="/neoga/*" element={<NeogaRouter />} />
          <Route path="/neososeoform/:q/*" element={<NeososeoFormPage />} />
          <Route path="/neososeoform/:q/finish" element={<NeososeoFormFinish />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
