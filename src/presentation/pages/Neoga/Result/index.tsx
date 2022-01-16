import { imgLogo } from '@assets/images';
import NeogaResultCard from '@components/common/NeogaResultCard';
import { Link } from 'react-router-dom';
import { StNeogaResult } from './style';

function NeogaResult() {
  return (
    <StNeogaResult>
      <Link to="/home">
        <img src={imgLogo} />
      </Link>
      <h1>지연님이 만든 너가소개서</h1>
      <h2>내가 생성한 너가소개서를 확인하세요</h2>
      <NeogaResultCard />
    </StNeogaResult>
  );
}

export default NeogaResult;
