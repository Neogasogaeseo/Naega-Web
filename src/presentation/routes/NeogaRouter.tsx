import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NeogaCreate from '@pages/Neoga/Create';
import FormDetail from '@pages/Neoga/FormDetail';
import NeogaLink from '@pages/Neoga/Link';
import NeogaLinkNew from '@pages/Neoga/Link/New';
import NeogaLinkCreated from '@pages/Neoga/Link/Created';

function NeogaRouter() {
  return (
    <Routes>
      <Route path="/create" element={<NeogaCreate />} />
      <Route path="/:formID/detail/form" element={<FormDetail />} />
      <Route path="/create/:formID" element={<NeogaLink />} />
      <Route path="/create/:formID/new" element={<NeogaLinkNew />} />
      <Route path="/create/:formID/created" element={<NeogaLinkCreated />} />
    </Routes>
  );
}

export default NeogaRouter;
