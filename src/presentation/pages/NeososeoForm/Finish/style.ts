import { COLOR } from '@styles/common/color';
import { FONT_STYLES } from '@styles/common/font-style';
import styled from 'styled-components';

export const StBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 2px;
  & > div:nth-child(2) {
    color: ${COLOR.GRAY_8};
    ${FONT_STYLES.SB_20_TITLE}
  }
  & > div:nth-child(3) {
    margin-top: 8px;
    color: ${COLOR.GRAY_5};
    ${FONT_STYLES.R_15_TITLE}
  }
`;

export const StNeososeoFinish = styled.div`
  height: 100vh;
  width: 100%;
  padding: 0 20px 50px 20px;
  display: grid;
  grid-template-rows: auto 58px;
  position: relative;
`;
