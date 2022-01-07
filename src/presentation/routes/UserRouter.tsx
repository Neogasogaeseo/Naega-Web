import { Route } from 'react-router-dom';
import Login from '@pages/Login';
import Join from '@pages/Join';

const LoginRouter = () => (
  <>
    <Route path="/login" element={<Login />} />
    <Route path="/join" element={<Join />} />
  </>
);

export default LoginRouter;
