import { COLOR } from '@styles/common/color';
import styled from 'styled-components';

export const StNeogaCreate = styled.div`
  width: 100vw;
  min-height: 100vh;
`;

const StWrapper = styled.div`
  padding: 20px;
`;

export const StWhiteWrapper = styled(StWrapper)`
  & > a > img {
    width: 44px;
    height: 44px;
  }
  & > div:nth-child(2) {
    font-size: 24px;
    font-weight: 600;
    line-height: 144%;
    word-spacing: -1.5%;
    margin-top: 16px;
  }
  & > div:nth-child(3) {
    padding-left: 4px;
    font-size: 15px;
    color: ${COLOR.GRAY_5};
    line-height: 144%;
    word-spacing: -1.5%;
  }
`;

export const StGreyWrapper = styled(StWrapper)`
  background-color: ${COLOR.GRAY_1};
  padding-top: 40px;
  & > div:nth-child(2) {
    font-size: 24px;
    font-weight: 600;
    line-height: 144%;
    word-spacing: -1.5%;
  }
`;
