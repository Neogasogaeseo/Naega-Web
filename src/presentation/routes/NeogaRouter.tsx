import { Route, Routes } from 'react-router-dom';
import NeogaCreate from '@pages/Neoga/Create';
import NeogaResult from '@pages/Neoga/Result';

function NeogaRouter() {
  return (
    <Routes>
      <Route path="/create" element={<NeogaCreate />} />
      <Route path="/result" element={<NeogaResult />} />
    </Routes>
  );
}

export default NeogaRouter;
