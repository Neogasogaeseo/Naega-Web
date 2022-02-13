import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '@api/index';
import { NeogaMainCardItem, NeogaBannerItem, NeogaResultCardItem } from '@api/types/neoga';
import { useLoginUser } from '@hooks/useLoginUser';
import NeogaMainCardList from '@components/NeogaMainCard/List';
import NeogaResultCard from '@components/common/NeogaResultCard';
import { StBanner, StForm, StHomeNeoga, StResult, StButtonArea, StEmptyView } from './styles';
import { icNewTag, icWhole } from '@assets/icons';
import { imgEmptyMain } from '@assets/images';

function HomeNeoga() {
  const [banner, setBanner] = useState<NeogaBannerItem>();
  const [templateList, setTemplateList] = useState<NeogaMainCardItem[]>([]);
  const [cardItem, setCardItem] = useState<NeogaResultCardItem>();
  const navigate = useNavigate();
  const { username } = useLoginUser();
  const MAX_CARD_ITEM = 2;

  useEffect(() => {
    (async () => {
      const banner = await api.neogaService.getBannerTemplate();
      banner && setBanner(banner);
      const templateList = await api.neogaService.getMainTemplate();
      setTemplateList(templateList);
      const cardItem = await api.neogaService.getMainResultCard();
      setCardItem(cardItem);
    })();
    return () => {
      setBanner(undefined);
      setTemplateList([]);
      setCardItem(undefined);
    }
  }, []);

  return (
    <StHomeNeoga>
      {banner && (
        <StBanner
          color={banner.backgroundColor}
          onClick={() => {
            navigate(
              banner.isCreated
                ? `/neoga/create/${banner.id}/created`
                : `/neoga/create/${banner.id}`,
            );
          }}
        >
          <div>
            <div>{banner.title}</div>
            <div>{banner.content}</div>
          </div>
          <img src={banner.src} />
          {banner.isNew && <img src={icNewTag} />}
        </StBanner>
      )}
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
          onItemClick={(id, isCreated) => {
            navigate(isCreated ? `/neoga/create/${id}/created` : `/neoga/create/${id}`);
          }}
        />
      </StForm>
      <StResult>
        <h1>{username}님이 만든 너가소개서</h1>
        <div>
          <h2>내가 생성한 너가소개서를 확인하세요!</h2>
          {cardItem && cardItem.resultList.length > 0 && (
            <button onClick={() => navigate('/neoga/result')}>
              전체보기
              <img src={icWhole} />
            </button>
          )}
        </div>
        {cardItem && cardItem.resultList.length > 0 ? (
          <>
            {cardItem.resultList.map((result) => (
              <NeogaResultCard key={result.id} {...result} />
            ))}
            {cardItem.count > MAX_CARD_ITEM && (
              <StButtonArea>
                <button onClick={() => navigate('/neoga/result')}>
                  외 {cardItem.count - MAX_CARD_ITEM}개 <span>더보기</span>
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
