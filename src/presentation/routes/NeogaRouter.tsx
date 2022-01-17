import { Route, Routes } from 'react-router-dom';
import NeogaCreate from '@pages/Neoga/Create';
import FormDetail from '@pages/Neoga/FormDetail';
import NeogaLink from '@pages/Neoga/Link';
import NeogaLinkResult from '@pages/Neoga/Link/Result';

function NeogaRouter() {
  return (
    <Routes>
      <Route path="/create" element={<NeogaCreate />} />
      <Route path="/:formID/detail/form" element={<FormDetail />} />
      <Route path="/create/:formID" element={<NeogaLink />} />
      <Route path="/create/:formID/:type" element={<NeogaLinkResult />} />
    </Routes>
  );
}

export default NeogaRouter;
