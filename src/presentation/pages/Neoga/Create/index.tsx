import { imgLogo } from '@assets/images';
import React from 'react';
import { Link } from 'react-router-dom';
import { StGreyWrapper, StNeogaCreate, StWhiteWrapper } from './style';

function NeogaCreate() {
  return (
    <StNeogaCreate>
      <StWhiteWrapper>
        <Link to="/home">
          <img src={imgLogo} />
        </Link>
        <div>너가 소개서 만들기</div>
        <div>원하는 테마 링크를 생성하여 공유하세요!</div>
      </StWhiteWrapper>
      <StGreyWrapper>
        <div>생성이 완료된 너가소개서</div>
      </StGreyWrapper>
    </StNeogaCreate>
  );
}

export default NeogaCreate;
