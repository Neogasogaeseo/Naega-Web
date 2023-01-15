import styled, { css } from 'styled-components';

import { icCloseWhite } from '@assets/icons';
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
`;

export const StKeywordCloseBtn = styled.div<{ color: string; theme: 'grey' | 'color' }>`
  cursor: pointer;
  mask-image: url(${icCloseWhite});
  width: 13px;
  height: 13px;
  ${({ color, theme }) =>
    theme === 'grey'
      ? css`
          background-color: ${COLOR.GRAY_6};
        `
      : css`
          background-color: ${color};
          opacity: 0.6;
        `}
`;

export const StCount = styled.span`
  color: ${COLOR.GRAY_4};
  margin-left: 12px;
`;

export const StMyDeleteBtn = styled.button`
  margin-right: 20px;
  position: absolute;
  right: 0;
  color: ${COLOR.GRAY_5};
  ${FONT_STYLES.R_14_TITLE};
  background-color: transparent;
`;
