import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import PrivateRoute from './common/PrivateRoute';
const MyProfileEdit = lazy(() => import('@pages/Edit/Profile'));

const TeamRouter = () => (
  <Routes>
    <Route path="/" element={<PrivateRoute />}>
      <Route path="profile/:userID" element={<MyProfileEdit />} />
    </Route>
  </Routes>
);

export default TeamRouter;
