import { Route, Routes } from 'react-router-dom';
import NeogaCreate from '@pages/Neoga/Create';
import NeogaResult from '@pages/Neoga/Result';
import FormDetail from '@pages/Neoga/FormDetail';
import NeogaLink from '@pages/Neoga/Link';
import NeogaLinkResult from '@pages/Neoga/Link/Result';
import PrivateRoute from './common/PrivateRoute';

function NeogaRouter() {
  return (
    <Routes>
      <Route path="/" element={<PrivateRoute />}>
        <Route path="/create" element={<NeogaCreate />} />
        <Route path="/result" element={<NeogaResult />} />
        <Route path="/:formID/detail/form" element={<FormDetail />} />
        <Route path="/create/:formID" element={<NeogaLink />} />
        <Route path="/create/:formID/:type" element={<NeogaLinkResult />} />
      </Route>
    </Routes>
  );
}

export default NeogaRouter;
