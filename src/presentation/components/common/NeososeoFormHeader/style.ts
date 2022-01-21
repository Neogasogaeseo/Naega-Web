import { COLOR } from '@styles/common/color';
import { FONT_STYLES } from '@styles/common/font-style';
import styled from 'styled-components';

export const StNeososeoFormHeader = styled.div`
  width: 100%;
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
    border-radius: 34px;
    background-color: ${COLOR.GRAY_1};
  }
`;
