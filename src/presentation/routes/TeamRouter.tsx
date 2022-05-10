import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import PrivateRoute from './common/PrivateRoute';
import TeamIssueFeedback from '@pages/Team/Issue/Feedback';
import TeamIssueKeyword from '@pages/Team/Issue/Keyword';
import TeamAlert from '@pages/Team/Alert';
import TeamMemberManagement from '@pages/Team/MemberManagement';
import TeamIssueEdit from '@pages/Team/Issue/Edit';
const TeamRegister = lazy(() => import('@pages/Team/Register'));
const TeamEdit = lazy(() => import('@pages/Team/Edit'));
const TeamMain = lazy(() => import('@pages/Team/Main'));
const TeamMember = lazy(() => import('@pages/Team/Member'));
const TeamNewIssue = lazy(() => import('@pages/Team/Issue/NewIssue'));
const TeamIssue = lazy(() => import('@pages/Team/Issue'));

const TeamRouter = () => (
  <Routes>
    <Route path="/" element={<PrivateRoute />}>
      <Route path="/register" element={<TeamRegister />} />
      <Route path="/:teamID" element={<TeamMain />} />
      <Route path="/:teamID/edit" element={<TeamEdit />} />
      <Route path="/:teamID/member" element={<TeamMember />} />
      <Route path="/:teamID/member/management" element={<TeamMemberManagement />} />
      <Route path="/:teamID/create" element={<TeamNewIssue />} />
      <Route path="/:teamID/:issueID/*" element={<TeamIssue />}>
        <Route path="create/*" element={<TeamIssueFeedback />}>
          <Route path="keyword" element={<TeamIssueKeyword />} />
        </Route>
      </Route>
      <Route path="/:teamID/:issueID/edit" element={<TeamIssueEdit />} />
      <Route path="/alert" element={<TeamAlert />} />
    </Route>
  </Routes>
);

export default TeamRouter;
