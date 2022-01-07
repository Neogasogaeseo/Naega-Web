import TeamIssue from '@pages/Team/Issue';
import TeamIssueFeedback from '@pages/Team/Issue/Feedback';
import TeamIssueKeyword from '@pages/Team/Issue/Keyword';
import TeamMain from '@pages/Team/Main';
import TeamRegister from '@pages/Team/Register';
import TeamRegisterMembers from '@pages/Team/Register/Members';
import { Route, Routes } from 'react-router-dom';

const TeamRouter = () => (
  <Routes>
    <Route path="/register" element={<TeamRegister />} />
    <Route path="/register/members" element={<TeamRegisterMembers />} />
    <Route path="/:teamID" element={<TeamMain />} />
    <Route path="/:teamID/:issueID" element={<TeamIssue />} />
    <Route path="/:teamID/:issueID/create" element={<TeamIssueFeedback />} />
    <Route path="/:teamID/:issueID/create/keyword" element={<TeamIssueKeyword />} />
  </Routes>
);

export default TeamRouter;
