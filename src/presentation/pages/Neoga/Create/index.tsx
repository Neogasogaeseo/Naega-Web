import { api } from '@api/index';
import { NeogaCardItem } from '@api/types/neoga';
import { imgLogo } from '@assets/images';
import NeogaCreateCardList from '@components/NeogaCreateCard/List';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { StGreyWrapper, StNeogaCreate, StWhiteWrapper } from './style';

function NeogaCreate() {
  const [allTemplateList, setallTemplateList] = useState<NeogaCardItem[]>([]);
  const [createdTemplateList, setCreatedTemplateList] = useState<NeogaCardItem[]>([]);

  useEffect(() => {
    (async () => {
      const data = await api.neogaService.getAllTemplates();
      setallTemplateList(data);
    })();
    (async () => {
      const data = await api.neogaService.getCreatedTemplates();
      setCreatedTemplateList(data);
    })();
  }, []);

  return (
    <StNeogaCreate>
      <StWhiteWrapper>
        <Link to="/home">
          <img src={imgLogo} />
        </Link>
        <div>너가 소개서 만들기</div>
        <div>원하는 테마 링크를 생성하여 공유하세요!</div>
        <NeogaCreateCardList cards={allTemplateList} onItemClick={(id) => console.log(id)} />
      </StWhiteWrapper>
      <StGreyWrapper>
        <div>생성이 완료된 너가소개서</div>
        <NeogaCreateCardList cards={createdTemplateList} onItemClick={(id) => console.log(id)} />
      </StGreyWrapper>
    </StNeogaCreate>
  );
}

export default NeogaCreate;
