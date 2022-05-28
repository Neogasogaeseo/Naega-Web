import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import PrivateRoute from './common/PrivateRoute';
const MyProfileEdit = lazy(() => import('@pages/MyProfileEdit'));

const MyPageEditRouter = () => (
  <Routes>
    <Route path="/" element={<PrivateRoute />}>
      <Route path="profile/:userID" element={<MyProfileEdit />} />
    </Route>
  </Routes>
);

export default MyPageEditRouter;
