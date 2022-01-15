import GlobalStyle from '@styles/global';
import Router from '@routes/Router';
import { useLoginUser } from '@hooks/useLoginUser';
import { useEffect } from 'react';

function App() {
  const { initLoginUser } = useLoginUser();

  useEffect(() => {
    initLoginUser();
  }, []);

  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
}

export default App;
