import { useNavigate } from 'react-router-dom';

import { StHomeNeogaEmptyView } from './style';

function HomeNeogaEmptyView() {
  const navigate = useNavigate();

  return (
    <StHomeNeogaEmptyView>
      <div>아직 생성한 너가소개서가 없어요</div>
      <div>첫 너가소개서, 만들어 볼까요?</div>
      <button onClick={() => navigate('/neoga/create')}>너가소개서 만들기</button>
    </StHomeNeogaEmptyView>
  );
}

export default HomeNeogaEmptyView;
