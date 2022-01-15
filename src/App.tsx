import GlobalStyle from '@styles/global';
import Router from '@routes/Router';
import { useLoginUser } from '@hooks/useLoginUser';
import { useEffect } from 'react';
import ToastList from '@components/common/Toast/List';

function App() {
  const { initLoginUser } = useLoginUser();

  useEffect(() => {
    initLoginUser();
  }, []);

  return (
    <>
      <GlobalStyle />
      <ToastList />
      <Router />
    </>
  );
}

export default App;
