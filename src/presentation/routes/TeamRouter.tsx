import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import PrivateRoute from './common/PrivateRoute';
import TeamIssueFeedback from '@pages/Team/Issue/Feedback';
import TeamIssueKeyword from '@pages/Team/Issue/Keyword';
const TeamIssue = lazy(() => import('@pages/Team/Issue'));
const TeamNewIssue = lazy(() => import('@pages/Team/Issue/NewIssue'));
const TeamMain = lazy(() => import('@pages/Team/Main'));
const TeamRegister = lazy(() => import('@pages/Team/Register'));
const TeamRegisterMembers = lazy(() => import('@pages/Team/Register/Members'));

const TeamRouter = () => (
  <Routes>
    <Route path="/" element={<PrivateRoute />}>
      <Route path="/register" element={<TeamRegister />} />
      <Route path="/register/members" element={<TeamRegisterMembers />} />
      <Route path="/:teamID" element={<TeamMain />} />
      <Route path="/:teamID/create" element={<TeamNewIssue />} />
      <Route path="/:teamID/:issueID/*" element={<TeamIssue />}>
        <Route path="create/*" element={<TeamIssueFeedback />}>
          <Route path="keyword" element={<TeamIssueKeyword />} />
        </Route>
      </Route>
    </Route>
  </Routes>
);

export default TeamRouter;
