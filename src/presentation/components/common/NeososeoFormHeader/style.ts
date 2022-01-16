import { FONT_STYLES } from '@styles/common/font-style';
import styled from 'styled-components';

export const StNeososeoFormHeader = styled.div`
  width: 100vw;
  display: grid;
  grid-template-columns: auto 68px;
  white-space: pre;
  padding: 0 20px;

  & div {
    line-height: 33px;
    ${FONT_STYLES.SB_22_BODY}
  }

  & img {
    width: 68px;
    height: 68px;
  }
`;
