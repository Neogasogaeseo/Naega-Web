import styled from 'styled-components';
import { COLOR } from '@styles/common/color';
import { FONT_STYLES } from '@styles/common/font-style';
import { CORAL_MAIN_BUTTON } from '@styles/common/button';

export const StHomeNeogaEmptyView = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    margin-top: 60px;
    margin-bottom: 24px;
  }

  div:nth-of-type(1) {
    ${FONT_STYLES.SB_18_TITLE};
    color: ${COLOR.GRAY_6};
    font-weight: 600;
    margin-bottom: 10px;
  }

  div:nth-of-type(2) {
    ${FONT_STYLES.R_15_TITLE};
    color: ${COLOR.GRAY_5};
    margin-bottom: 34px;
  }

  button {
    ${CORAL_MAIN_BUTTON};
    padding: 15px 32px;
    margin-bottom: 62px;
    border-radius: 14px;
    font-size: 15px;
    font-weight: 600;
    line-height: 21.6px;
    letter-spacing: -0.015em;
  }
`;
