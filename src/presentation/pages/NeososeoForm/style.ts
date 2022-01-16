import { FONT_STYLES } from '@styles/common/font-style';
import styled from 'styled-components';

export const StNeososeoFormPage = styled.div`
  min-height: 100vh;
  width: calc(100vw - 40px);
  padding: 50px 0;
  display: grid;
  grid-template-rows: 70px auto;
`;

export const StNeososeoFormHeader = styled.div`
  width: calc(100vw - 40px);
  display: grid;
  grid-template-columns: auto 68px;
  white-space: pre;

  & div {
    line-height: 33px;
    ${FONT_STYLES.SB_22_BODY}
  }

  & img {
    width: 68px;
    height: 68px;
  }
`;
