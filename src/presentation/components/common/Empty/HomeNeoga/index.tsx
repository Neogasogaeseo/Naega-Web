import { useNavigate } from 'react-router-dom';

import { StHomeNeogaEmptyView } from './style';
import { imgEmptyMain } from '@assets/images';

function HomeNeogaEmptyView() {
  const navigate = useNavigate();

  return (
    <StHomeNeogaEmptyView>
      <img src={imgEmptyMain} />
      <div>아직 생성된 너가소개서가 없어요</div>
      <div>첫 너가소개서, 만들러 갈래요?</div>
      <button onClick={() => navigate('/neoga/create')}>너가소개서 생성</button>
    </StHomeNeogaEmptyView>
  );
}

export default HomeNeogaEmptyView;
