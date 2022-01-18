import { StBanner, StForm, StHomeNeoga, StResult, StButtonArea } from './styles';
import { icWhole } from '@assets/icons';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { api } from '@api/index';
import { NeogaMainCardItem } from '@api/types/neoga';
import NeogaMainCardList from '@components/NeogaMainCard/List';
import NeogaResultCard from '@components/common/NeogaResultCard';

function HomeNeoga() {
  const navigate = useNavigate();
  const [templateList, setTemplateList] = useState<NeogaMainCardItem[]>([]);

  useEffect(() => {
    (async () => {
      const data = await api.neogaService.getMainTemplate();
      setTemplateList(data);
    })();
  }, []);

  return (
    <StHomeNeoga>
      <StBanner></StBanner>
      <StForm>
        <h1>너가소개서 설문 만들기</h1>
        <div>
          <h2>지인에게 궁금한 내 모습을 물어보세요</h2>
          <button onClick={() => navigate('/neoga/create')}>
            전체보기
            <img src={icWhole} />
          </button>
        </div>
        <NeogaMainCardList
          cards={templateList}
          onItemClick={(id) => {
            // navigate(`/neoga/${id}`);
            console.log(id);
          }}
        />
      </StForm>
      <StResult>
        <h1>지연님이 만든 너가소개서</h1>
        <div>
          <h2>내가 생성한 너가소개서를 확인하세요!</h2>
          <button onClick={() => navigate('/neoga/result')}>
            전체보기
            <img src={icWhole} />
          </button>
        </div>
        <NeogaResultCard />
        <StButtonArea>
          <button onClick={() => navigate('/neoga/result')}>외 3개 더보기</button>
        </StButtonArea>
      </StResult>
    </StHomeNeoga>
  );
}

export default HomeNeoga;
