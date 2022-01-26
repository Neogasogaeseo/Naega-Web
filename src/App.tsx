import GlobalStyle from '@styles/global';
import Router from '@routes/Router';
import { useLoginUser } from '@hooks/useLoginUser';
import { useEffect } from 'react';
import ToastList from '@components/common/Toast/List';
import { useLocation } from 'react-router-dom';
import { useGoogleAnalytics } from '@hooks/useGoogleAnalytics';
import ReactGA from 'react-ga';

function App() {
  const { initLoginUser } = useLoginUser();

  useEffect(() => {
    initLoginUser();
  }, []);

  const location = useLocation();
  const { isGoogleAnalyticsLoaded } = useGoogleAnalytics();

  useEffect(() => {
    if (isGoogleAnalyticsLoaded) ReactGA.pageview(location.pathname + location.search);
  }, [isGoogleAnalyticsLoaded, location]);

  return (
    <>
      <GlobalStyle />
      <ToastList />
      <Router />
    </>
  );
}

export default App;
