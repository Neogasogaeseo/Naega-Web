import styled from 'styled-components';
import { COLOR } from '@styles/common/color';
import { FONT_STYLES } from '@styles/common/font-style';
import { CORAL_MAIN_BUTTON } from '@styles/common/button';

export const StHomeNeogaEmptyView = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 85px;

  div:nth-of-type(1) {
    ${FONT_STYLES.SB_18_TITLE};
    color: ${COLOR.GRAY_5};
    font-weight: 600;
    margin-bottom: 12px;
  }

  div:nth-of-type(2) {
    ${FONT_STYLES.M_14_TITLE};
    color: ${COLOR.GRAY_4};
    margin-bottom: 40px;
  }

  button {
    ${CORAL_MAIN_BUTTON};
    padding: 15px 32px;
    margin-bottom: 62px;
    border-radius: 14px;
    font-size: 15px;
    font-weight: 500;
    line-height: 21.6px;
    letter-spacing: -0.015em;
  }
`;
