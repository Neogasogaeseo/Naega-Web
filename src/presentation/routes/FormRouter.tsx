import NeososeoFormAnswer from '@pages/NeososeoForm/Answer';
import NeososeoFormHome from '@pages/NeososeoForm/Home';
import NeososeoFormIntro from '@pages/NeososeoForm/Intro';
import TeamIssueKeyword from '@pages/Team/Issue/Keyword';
import { Route, Routes } from 'react-router-dom';

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
