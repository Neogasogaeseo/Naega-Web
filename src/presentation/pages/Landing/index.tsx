import LandingPage from '@components/LandingPage';
import { useLoginUser } from '@hooks/useLoginUser';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function Landing() {
  const { isAuthenticated } = useLoginUser();
  const navigate = useNavigate();
  useEffect(()=> {
    if (isAuthenticated) navigate('/home');
  }, [isAuthenticated]);
  return <LandingPage />;
}

export default Landing;
