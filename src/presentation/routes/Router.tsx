import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '@pages/Login';
import Join from '@pages/Join';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
