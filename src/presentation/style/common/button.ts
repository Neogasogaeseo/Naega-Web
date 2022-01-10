import { css } from 'styled-components';
import { COLOR } from '@styles/common/color';

export const CORAL_MAIN_BUTTON = css`
  background-color: ${COLOR.CORAL_MAIN};
  color: ${COLOR.WHITE};
`;

export const FULL_WIDTH_BUTTON = css`
  width: 100%;
  min-height: 58px;
  border-radius: 14px;
  font-size: 16px;
`;

export const PROFILE_ADD_BUTTON = css`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${COLOR.GRAY_1};
`;
