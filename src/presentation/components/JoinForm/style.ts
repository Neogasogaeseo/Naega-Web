import styled from 'styled-components';

import { COLOR } from '@styles/common/color';
import { FONT_STYLES } from '@styles/common/font-style';
import { CORAL_MAIN_BUTTON } from '@styles/common/button';

export const StJoinForm = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 20px;

  h1 {
    ${FONT_STYLES.SB_20_TITLE};
    color: ${COLOR.GRAY_8};
    margin: 54px 0px 72px 0px;
  }

  & > *:nth-child(2) {
    display: flex;
    justify-content: center;
  }
`;

export const StInputWrapper = styled.div`
  & > div:nth-of-type(2n + 1) {
    margin-left: 4px;
  }
`;

export const StButton = styled.button`
  height: 58px;
  margin-top: 137px;
  margin-bottom: 48px;
  border-radius: 18px;
  ${CORAL_MAIN_BUTTON};
  ${FONT_STYLES.M_16_TITLE};
  :disabled {
    background-color: ${COLOR.GRAY_3};
  }
`;
