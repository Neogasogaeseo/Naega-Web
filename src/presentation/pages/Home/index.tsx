import HomeHeader from '@components/common/HomeHeader';
import HomeRouter from '@routes/HomeRouter';
import { StHome } from './style';

function Home() {
  return (
    <StHome>
      <HomeHeader />
      <HomeRouter />
    </StHome>
  );
}

export default Home;
