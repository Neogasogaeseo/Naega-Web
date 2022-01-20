import { StBanner, StForm, StHomeNeoga, StResult, StButtonArea, StEmptyView } from './styles';
import { icNewTag, icWhole } from '@assets/icons';
import { imgEmptyMain } from '@assets/images';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { api } from '@api/index';
import { NeogaMainCardItem, NeogaBannerItem, NeogaResultCardItem } from '@api/types/neoga';
import NeogaMainCardList from '@components/NeogaMainCard/List';
import NeogaResultCard from '@components/common/NeogaResultCard';
import { useLoginUser } from '@hooks/useLoginUser';

function HomeNeoga() {
  const navigate = useNavigate();
  const [banner, setBanner] = useState<NeogaBannerItem>();
  const [templateList, setTemplateList] = useState<NeogaMainCardItem[]>([]);
  const [cardItem, setCardItem] = useState<NeogaResultCardItem>();
  const { username } = useLoginUser();

  useEffect(() => {
    (async () => {
      const data = await api.neogaService.getMainTemplate();
      setTemplateList(data);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const data = await api.neogaService.getBannerTemplate();
      setBanner(data);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const data = await api.neogaService.getResultCard();
      setCardItem(data);
    })();
  }, []);

  return (
    <StHomeNeoga>
      <StBanner
        color={banner?.backgroundColor}
        onClick={() => navigate(`/neoga/create/${banner?.id}`)}
      >
        <div>
          <div>{banner?.title}</div>
          <div>{banner?.content}</div>
        </div>
        <img src={banner?.src} />
        {banner?.isNew && <img src={icNewTag} />}
      </StBanner>
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
            navigate(`/neoga/create/${id}`);
          }}
        />
      </StForm>
      <StResult>
        <h1>{username}님이 만든 너가소개서</h1>
        <div>
          <h2>내가 생성한 너가소개서를 확인하세요!</h2>
          {cardItem && (
            <button onClick={() => navigate('/neoga/result')}>
              전체보기
              <img src={icWhole} />
            </button>
          )}
        </div>
        {cardItem ? (
          <>
            {cardItem.resultList.map((result) => (
              <NeogaResultCard key={result.id} {...result} />
            ))}
            {cardItem.count > 2 && (
              <StButtonArea>
                <button onClick={() => navigate('/neoga/result')}>
                  외 {cardItem.count - 2}개 더보기
                </button>
              </StButtonArea>
            )}
          </>
        ) : (
          <StEmptyView>
            <img src={imgEmptyMain} />
            <div>아직 생성된 너가소개서가 없어요!</div>
            <div>첫 너가소개서, 만들러 갈래요?</div>
            <button onClick={() => navigate('/neoga/create')}>너가소개서 생성</button>
          </StEmptyView>
        )}
      </StResult>
    </StHomeNeoga>
  );
}

export default HomeNeoga;
