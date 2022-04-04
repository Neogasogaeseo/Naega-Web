import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import PrivateRoute from './common/PrivateRoute';
const MyProfileEdit = lazy(() => import('@pages/Edit/Profile'));
const MyKeywordDelete = lazy(() => import('@pages/Edit/DeleteKeyword'));

const MyPageEditRouter = () => (
  <Routes>
    <Route path="/" element={<PrivateRoute />}>
      <Route path="profile/:userID" element={<MyProfileEdit />} />
      <Route path="keyword/:userID" element={<MyKeywordDelete />} />
    </Route>
  </Routes>
);

export default MyPageEditRouter;
