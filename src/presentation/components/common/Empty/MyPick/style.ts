import styled from 'styled-components';

import { COLOR } from '@styles/common/color';
import { FONT_STYLES } from '@styles/common/font-style';

export const StMyPickEmptyView = styled.div`
  text-align: center;

  div:first-child {
    margin-top: 70px;
    margin-bottom: 12px;
    color: ${COLOR.GRAY_4};
    ${FONT_STYLES.SB_18_TITLE};
  }

  div:last-child {
    color: ${COLOR.GRAY_35};
    ${FONT_STYLES.M_14_TITLE};
  }
`;
