import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NeogaCreate from '@pages/Neoga/Create';
import FormDetail from '@pages/Neoga/FormDetail';

function NeogaRouter() {
  return (
    <Routes>
      <Route path="/create" element={<NeogaCreate />} />
      <Route path="/detail/form" element={<FormDetail />} />
    </Routes>
  );
}

export default NeogaRouter;
