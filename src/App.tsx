import GlobalStyle from '@styles/global';
import Router from '@routes/Router';
import { useLoginUser } from '@hooks/useLoginUser';
import { useEffect } from 'react';
import ToastList from '@components/common/Toast/List';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

function App() {
  const { initLoginUser } = useLoginUser();
  const queryClient = new QueryClient();

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
