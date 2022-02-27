import { COLOR } from '@styles/common/color';
import { FONT_STYLES } from '@styles/common/font-style';
import styled from 'styled-components';

export const StHomeTeamEmptyView = styled.div`
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
