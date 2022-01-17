import { Route, Routes } from 'react-router-dom';
import NeogaCreate from '@pages/Neoga/Create';
import NeogaResult from '@pages/Neoga/Result';
import FormDetail from '@pages/Neoga/FormDetail';
import NeogaLink from '@pages/Neoga/Link';
import NeogaLinkNew from '@pages/Neoga/Link/New';
import NeogaLinkCreated from '@pages/Neoga/Link/Created';

function NeogaRouter() {
  return (
    <Routes>
      <Route path="/create" element={<NeogaCreate />} />
      <Route path="/result" element={<NeogaResult />} />
      <Route path="/:formID/detail/form" element={<FormDetail />} />
      <Route path="/create/:formID" element={<NeogaLink />} />
      <Route path="/create/:formID/new" element={<NeogaLinkNew />} />
      <Route path="/create/:formID/created" element={<NeogaLinkCreated />} />
    </Routes>
  );
}

export default NeogaRouter;
