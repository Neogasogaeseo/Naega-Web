import styled from 'styled-components';
import { FONT_STYLES } from '@styles/common/font-style';
import { COLOR } from '@styles/common/color';

export const StNeogaResult = styled.div`
  width: 100vw;
  min-height: 100vh;
  padding: 0 20px;

  h1 {
    ${FONT_STYLES.SB_24_TITLE};
    color: ${COLOR.GRAY_8};
    font-weight: 600;
    margin-top: 6px;
    margin-bottom: 14px;
  }

  h2 {
    ${FONT_STYLES.R_15_TITLE};
    color: ${COLOR.GRAY_5};
    margin-bottom: 32px;
  }
`;
