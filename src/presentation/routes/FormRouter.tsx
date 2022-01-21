import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
const NeososeoFormAnswer = lazy(() => import('@pages/NeososeoForm/Answer'));
const NeososeoFormHome = lazy(() => import('@pages/NeososeoForm/Home'));
const NeososeoFormIntro = lazy(() => import('@pages/NeososeoForm/Intro'));
const TeamIssueKeyword = lazy(() => import('@pages/Team/Issue/Keyword'));

function FormRouter() {
  return (
    <Routes>
      <Route path="/" element={<NeososeoFormHome />} />
      <Route path="/intro" element={<NeososeoFormIntro />} />
      <Route path="/answer" element={<NeososeoFormAnswer />}>
        <Route path="keyword" element={<TeamIssueKeyword />} />
      </Route>
    </Routes>
  );
}

export default FormRouter;
