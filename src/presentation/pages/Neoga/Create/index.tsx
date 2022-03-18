import { useState } from 'react';
import { useQuery } from 'react-query';
import { Link, useNavigate } from 'react-router-dom';

import { api } from '@api/index';
import { imgLogo } from '@assets/images';
import NeogaCreateCardList from '@components/NeogaCreateCard/List';
import { StNeogaCreate, StWhiteWrapper, StViewModeSelector } from './style';

function NeogaCreate() {
  const [viewMode, setViewMode] = useState<'recent' | 'popular'>('popular');
  const navigate = useNavigate();

  const { data: allTemplateList } = useQuery(['neososeoTemplates', viewMode], () =>
    api.neogaService.getAllTemplates(viewMode),
  );

  return (
    <StNeogaCreate>
      <StWhiteWrapper>
        <Link to="/home">
          <img src={imgLogo} alt="로고" />
        </Link>
        <div>너가소개서 설문 만들기</div>
        <div>원하는 설문의 링크를 생성하고 공유해보세요</div>
        <div>
          <StViewModeSelector
            selected={viewMode === 'popular'}
            onClick={() => setViewMode('popular')}
          >
            인기순
          </StViewModeSelector>
          <StViewModeSelector
            selected={viewMode === 'recent'}
            onClick={() => setViewMode('recent')}
          >
            최신순
          </StViewModeSelector>
        </div>
        {allTemplateList && (
          <NeogaCreateCardList
            cards={allTemplateList}
            onItemClick={(id, isCreated) => {
              navigate(isCreated ? `/neoga/create/${id}/created` : `/neoga/create/${id}/new`);
            }}
          />
        )}
      </StWhiteWrapper>
    </StNeogaCreate>
  );
}

export default NeogaCreate;
