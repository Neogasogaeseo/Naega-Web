import { css } from 'styled-components';
import { COLOR } from '@styles/common/color';
import { FONT_STYLES } from './font-style';

export const COMMON_INPUT = css`
  padding: 18px 16px;
  border: 1px solid ${COLOR.GRAY_3};
  border-radius: 16px;
  ${FONT_STYLES.R_16_TITLE}
  color: ${COLOR.GRAY_7};
  &::placeholder {
    color: ${COLOR.GRAY_4};
  }
`;

export const COMMON_LABEL = css`
  ${FONT_STYLES.SB_16_TITLE}
  color: ${COLOR.GRAY_7};
`;
