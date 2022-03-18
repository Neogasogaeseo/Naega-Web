import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { api } from '@api/index';
import { NeogaMainCardItem, NeogaBannerItem, NeogaResultCardItem } from '@api/types/neoga';
import { useLoginUser } from '@hooks/useLoginUser';
import NeogaMainCardList from '@components/NeogaMainCard/List';
import NeogaResultCard from '@components/common/NeogaResultCard';
import HomeNeogaEmptyView from '@components/common/Empty/HomeNeoga';
import { StBanner, StForm, StHomeNeoga, StResult, StMoreButtonArea, StWholeButton } from './style';
import { icNewTag, icWhole } from '@assets/icons';

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
    };
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
          <StWholeButton onClick={() => navigate('/neoga/create')}>
            전체보기
            <img src={icWhole} />
          </StWholeButton>
        </div>
        <NeogaMainCardList
          cards={templateList}
          onItemClick={(id, isCreated) => {
            navigate(isCreated ? `/neoga/create/${id}/created` : `/neoga/create/${id}/new`);
          }}
        />
      </StForm>
      <StResult>
        <h1>{username}님이 만든 너가소개서</h1>
        <div>
          <h2>내가 생성한 너가소개서를 확인하세요!</h2>
          {cardItem && cardItem.resultList.length > 0 && (
            <StWholeButton onClick={() => navigate('/neoga/result')}>
              전체보기
              <img src={icWhole} />
            </StWholeButton>
          )}
        </div>
        {cardItem && cardItem.resultList.length > 0 ? (
          <>
            {cardItem.resultList.map((result) => (
              <NeogaResultCard key={result.id} {...result} />
            ))}
            {cardItem.count > MAX_CARD_ITEM && (
              <StMoreButtonArea>
                <button onClick={() => navigate('/neoga/result')}>
                  외 {cardItem.count - MAX_CARD_ITEM}개 <span>더보기</span>
                </button>
              </StMoreButtonArea>
            )}
          </>
        ) : (
          <HomeNeogaEmptyView />
        )}
      </StResult>
    </StHomeNeoga>
  );
}

export default HomeNeoga;
