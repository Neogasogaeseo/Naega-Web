import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import GlobalStyle from '@styles/global';
import Router from '@routes/Router';
import { useLoginUser } from '@hooks/useLoginUser';
import ToastList from '@components/common/Toast/List';
import VConsole from 'vconsole';
import { DOMAIN } from '@utils/constant';

function App() {
  if (DOMAIN === 'https://naegasogaeseo-dev.kro.kr') new VConsole();

  const { initLoginUser } = useLoginUser();

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
