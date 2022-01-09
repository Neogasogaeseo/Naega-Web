import { css } from 'styled-components';
import { COLOR } from '@styles/common/color';

export const COMMON_INPUT = css`
  padding: 18px 16px;
  border: 1px solid ${COLOR.GRAY_3};
  border-radius: 16px;
  font-size: 16px;
  color: ${COLOR.GRAY_7};
  &::placeholder {
    color: ${COLOR.GRAY_5};
  }
`;
