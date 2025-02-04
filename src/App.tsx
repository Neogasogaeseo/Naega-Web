import { useEffect } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';

import ToastList from '@components/common/Toast/List';
import { GaAction, GaCategory, useGoogleAnalytics } from '@hooks/useGoogleAnalytics';
import { useLoginUser } from '@hooks/useLoginUser';
import Router from '@routes/Router';
import GlobalStyle from '@styles/global';
import ReactGA from 'react-ga';

function App() {
  const { initLoginUser, userID, isAuthenticated } = useLoginUser();
  const { isGoogleAnalyticsLoaded, makeGaEvent } = useGoogleAnalytics();

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  useEffect(() => {
    initLoginUser();
  }, []);

  useEffect(() => {
    if (isGoogleAnalyticsLoaded) {
      makeGaEvent({
        category: GaCategory.INIT,
        action: GaAction.USER_AGENT,
        label: navigator.userAgent,
      });
      if (isAuthenticated) {
        ReactGA.set({ userID });
      }
    }
  }, [isGoogleAnalyticsLoaded, isAuthenticated]);

  return (
    <>
      <GlobalStyle />
      <ToastList />
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
}

export default App;
