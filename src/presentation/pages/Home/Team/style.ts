import styled from 'styled-components';
import { COLOR } from '@styles/common/color';
import { FONT_STYLES } from '@styles/common/font-style';

export const StTeamMain = styled.div`
  & h1 {
    font-weight: 600;
    font-size: 18px;
    color: ${COLOR.GRAY_8};
    margin-top: 28px;
    margin-bottom: 18px;
  }
`;

export const StDivisionLine = styled.div`
  width: calc(100% + 40px);
  height: 8px;
  background-color: ${COLOR.GRAY_1};
  margin-top: 24px;
  margin-left: -20px;
`;

export const StEmptyView = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    margin-top: 56px;
    margin-bottom: 24px;
  }

  div:nth-of-type(1) {
    ${FONT_STYLES.SB_18_TITLE};
    color: ${COLOR.GRAY_6};
    font-weight: 600;
    margin-bottom: 10px;
  }

  div:nth-of-type(2) {
    ${FONT_STYLES.R_15_TITLE};
    color: ${COLOR.GRAY_5};
  }
`;
