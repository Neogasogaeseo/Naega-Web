import { COLOR } from '@styles/common/color';
import { FONT_STYLES } from '@styles/common/font-style';
import styled from 'styled-components';

export const StHomeTeamEmptyView = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;

  div:nth-of-type(1) {
    ${FONT_STYLES.SB_18_TITLE};
    color: ${COLOR.GRAY_4};
    font-weight: 600;
    margin-bottom: 12px;
  }

  div:nth-of-type(2) {
    ${FONT_STYLES.M_14_TITLE};
    color: #dedede;
  }
`;
