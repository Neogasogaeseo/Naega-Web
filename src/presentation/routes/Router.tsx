import ScrollToTop from '@components/common/ScrollToTop';
import NeososeoFormPage from '@pages/NeososeoForm';
import NeososeoFormFinish from '@pages/NeososeoForm/Finish';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NeogaRouter from './NeogaRouter';
import TeamRouter from './TeamRouter';
import UserRouter from './UserRouter';

const Router = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/*" element={<UserRouter />} />
        <Route path="/team/*" element={<TeamRouter />} />
        <Route path="/neoga/*" element={<NeogaRouter />} />
        <Route path="/neososeoform/:userID/:formID/*" element={<NeososeoFormPage />} />
        <Route path="/neososeoform/:userID/:formID/finish" element={<NeososeoFormFinish />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
