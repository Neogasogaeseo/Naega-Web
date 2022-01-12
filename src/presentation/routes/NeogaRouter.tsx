import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NeogaCreate from '@pages/Neoga/Create';

function NeogaRouter() {
  return (
    <Routes>
      <Route path="/create" element={<NeogaCreate />} />
    </Routes>
  );
}

export default NeogaRouter;
