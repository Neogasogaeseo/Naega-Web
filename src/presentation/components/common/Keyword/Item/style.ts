import styled from 'styled-components';

import { COLOR } from '@styles/common/color';
import { FONT_STYLES } from '@styles/common/font-style';

export const StKeywordItem = styled.div<{ color: string; fontColor: string }>`
  position: relative;
  display: flex;
  align-items: center;
  & > div {
    background-color: ${({ color }) => color};
    & > div {
      color: ${({ fontColor }) => fontColor};
    }
    font-size: 13px;
    border-radius: 18px;
    padding: 7px 12px;
    display: flex;
    justify-content: space-between;
    gap: 8px;
    ${FONT_STYLES.R_13_TITLE}
  }
  img {
    cursor: pointer;
  }
`;

export const StCount = styled.span`
  color: ${COLOR.GRAY_4};
  margin-left: 12px;
`;

export const StMyDeleteBtn = styled.button`
  margin-right: 20px;
  position: absolute;
  right: 0;
`;
