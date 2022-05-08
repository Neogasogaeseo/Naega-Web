import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';

import { api } from '@api/index';
import { useLoginUser } from '@hooks/useLoginUser';
import NeogaMainCardList from '@components/NeogaMainCard/List';
import NeogaResultCard from '@components/common/NeogaResultCard';
import HomeNeogaEmptyView from '@components/common/Empty/HomeNeoga';
import { StBanner, StForm, StHomeNeoga, StResult, StMoreButtonArea, StWholeButton } from './style';
import { icNewTag, icWhole } from '@assets/icons';

function HomeNeoga() {
  const navigate = useNavigate();
  const { username } = useLoginUser();
  const MAX_CARD_ITEM = 2;

  const { data: banner, isLoading: isBannerLoading } = useQuery(
    'neogaBanner',
    api.neogaService.getBannerTemplate,
  );

  const { data: templateList, isLoading: isTemplateListLoading } = useQuery(
    'templateList',
    api.neogaService.getMainTemplate,
  );

  const { data: cardItem, isLoading: isCardItemLoading } = useQuery(
    'mainResultCard',
    api.neogaService.getMainResultCard,
  );

  return (
    <StHomeNeoga>
      {isBannerLoading ? (
        <div>배너 로딩 중</div>
      ) : (
        banner && (
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
        )
      )}

      {isTemplateListLoading ? (
        <div>너가소개서 설문 로딩 중</div>
      ) : (
        templateList && (
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
        )
      )}

      {isCardItemLoading ? (
        <div>만든 너가소개서 로딩 중</div>
      ) : (
        cardItem && (
          <StResult>
            <h1>{username}님이 만든 너가소개서</h1>
            <div>
              <h2>내가 생성한 너가소개서를 확인하세요!</h2>
              {cardItem.resultList.length > 0 && (
                <StWholeButton onClick={() => navigate('/neoga/result')}>
                  전체보기
                  <img src={icWhole} />
                </StWholeButton>
              )}
            </div>
            {cardItem.resultList.length > 0 ? (
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
        )
      )}
    </StHomeNeoga>
  );
}

export default HomeNeoga;
