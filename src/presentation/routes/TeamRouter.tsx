import TeamIssue from '@pages/Team/Issue';
import TeamIssueFeedback from '@pages/Team/Issue/Feedback';
import TeamIssueKeyword from '@pages/Team/Issue/Keyword';
import TeamNewIssue from '@pages/Team/Issue/NewIssue';
import TeamMain from '@pages/Team/Main';
import TeamRegister from '@pages/Team/Register';
import TeamRegisterMembers from '@pages/Team/Register/Members';
import { Route, Routes } from 'react-router-dom';
import PrivateRoute from './common/PrivateRoute';

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
