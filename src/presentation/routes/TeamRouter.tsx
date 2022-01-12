import TeamIssue from '@pages/Team/Issue';
import TeamIssueFeedback from '@pages/Team/Issue/Feedback';
import TeamIssueKeyword from '@pages/Team/Issue/Keyword';
import TeamNewIssue from '@pages/Team/Issue/NewIssue';
import TeamMain from '@pages/Team/Main';
import TeamRegister from '@pages/Team/Register';
import TeamRegisterMembers from '@pages/Team/Register/Members';
import { Route, Routes } from 'react-router-dom';

const TeamRouter = () => (
  <Routes>
    <Route path="/register" element={<TeamRegister />} />
    <Route path="/register/members" element={<TeamRegisterMembers />} />
    <Route path="/:teamID" element={<TeamMain />} />
    <Route path="/:teamID/:issueID/*" element={<TeamIssue />}>
      <Route path="create/*" element={<TeamIssueFeedback />}>
        <Route path="keyword" element={<TeamIssueKeyword />} />
        <Route path="newissue" element={<TeamNewIssue />} />
      </Route>
    </Route>
  </Routes>
);

export default TeamRouter;
