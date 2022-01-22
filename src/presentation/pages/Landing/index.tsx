import LandingPage from '@components/LandingPage';
import { useLoginUser } from '@hooks/useLoginUser';
import { useNavigate } from 'react-router-dom';

function Landing() {
  const { isAuthenticated } = useLoginUser();
  const navigate = useNavigate();
  if (isAuthenticated) navigate('/home');
  return <LandingPage />;
}

export default Landing;
