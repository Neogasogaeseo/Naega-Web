import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import GlobalStyle from '@styles/global';
import Router from '@routes/Router';
import { useLoginUser } from '@hooks/useLoginUser';
import ToastList from '@components/common/Toast/List';

function App() {
  const { initLoginUser, isAuthenticated } = useLoginUser();

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  useEffect(() => {
    if (isAuthenticated) initLoginUser();
    // TODO else 로그아웃
  }, [isAuthenticated]);

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
