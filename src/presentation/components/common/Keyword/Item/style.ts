import { FONT_STYLES } from '@styles/common/font-style';
import styled from 'styled-components';

export const StKeywordItem = styled.div<{ color: string; fontColor: string }>`
  position: relative;
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
