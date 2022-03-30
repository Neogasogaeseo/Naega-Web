import { css } from 'styled-components';

import { COLOR } from './color';
import { FONT_STYLES } from './font-style';

export const COMMON_MODAL_BUTTON = css`
  display: flex;
  & > button {
    width: 144px;
    height: 50px;
    border-radius: 12px;
    ${FONT_STYLES.M_15_TITLE}
    line-height: 100%;
    letter-spacing: -0.01em;
  }
  & > button:first-child {
    margin-right: 10px;
    background-color: ${COLOR.GRAY_15};
    color: ${COLOR.GRAY_5};
  }
  & > button:last-child {
    background-color: ${COLOR.CORAL_1};
    color: ${COLOR.CORAL_MAIN};
  }
`;

export const COMMON_MODAL = css`
  background-color: #ffffff;
  box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.08);
  border-radius: 24px;
`;
