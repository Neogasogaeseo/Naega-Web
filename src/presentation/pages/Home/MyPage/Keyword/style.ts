import styled from 'styled-components';

import { COLOR } from '@styles/common/color';
import { FONT_STYLES } from '@styles/common/font-style';

export const StMyKeyword = styled.div``;

export const StMyKeywordHeader = styled.div`
  height: 76px;
  background-color: ${COLOR.GRAY_1};
  padding: 42px 20px 19px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    ${FONT_STYLES.SB_15_TITLE};
    color: ${COLOR.GRAY_6};
  }

  span:last-child {
    margin-left: 3px;
    color: ${COLOR.CORAL_MAIN};
  }

  svg {
    cursor: pointer;
  }
`;

export const StLoaderWrapper = styled.div`
  margin-top: 50px;
`;
