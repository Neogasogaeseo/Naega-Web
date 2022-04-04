import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
const NeososeoFormAnswer = lazy(() => import('@pages/NeososeoForm/Answer'));
const NeososeoFormHome = lazy(() => import('@pages/NeososeoForm/Home'));
const NeososeoFormIntro = lazy(() => import('@pages/NeososeoForm/Intro'));
import TeamIssueKeyword from '@pages/Team/Issue/Keyword';
import PublicRoute from './common/PublicRoute';
import NeososeoFormPage from '@pages/NeososeoForm';
import NeososeoFormFinish from '@pages/NeososeoForm/Finish';

function FormRouter() {
  return (
    <Routes>
      <Route path="/" element={<PublicRoute />}>
        <Route path="/" element={<NeososeoFormPage />}>
          <Route path="/" element={<NeososeoFormHome />} />
          <Route path="/intro" element={<NeososeoFormIntro />} />
          <Route path="/answer" element={<NeososeoFormAnswer />}>
            <Route path="keyword" element={<TeamIssueKeyword />} />
          </Route>
        </Route>
        <Route path="/finish" element={<NeososeoFormFinish />} />
      </Route>
    </Routes>
  );
}

export default FormRouter;
