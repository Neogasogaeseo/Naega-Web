import { COLOR } from '@styles/common/color';
import { FONT_STYLES } from '@styles/common/font-style';
import styled from 'styled-components';

export const StNeogaCreateCardItem = styled.div<{ idx: number }>`
  position: relative;
  height: 104px;
  border-radius: 20px;
  padding: 0 22px;
  white-space: pre-line;
  display: flex;
  align-items: center;
  cursor: pointer;
  box-shadow: 0px 2px 20px rgba(88, 99, 109, 0.05);
  z-index: ${({ idx }) => idx};
  margin-bottom: 12px;

  & div {
    flex: 1;
    & > div:nth-child(1) {
      margin-bottom: 9px;
      color: ${COLOR.GRAY_8};
      ${FONT_STYLES.SB_16_TITLE}
    }
    & > div:nth-child(2) {
      color: ${COLOR.GRAY_5};
      ${FONT_STYLES.R_14_TITLE}
      opacity: 0.8;
    }
  }

  & img {
    width: 52px;
    height: 52px;
    margin-right: 18px;
  }

  & svg {
    & path {
      stroke: ${COLOR.GRAY_4};
    }
  }
`;
