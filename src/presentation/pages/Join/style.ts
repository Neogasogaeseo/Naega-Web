import styled from 'styled-components';

import { COLOR } from '@styles/common/color';
import { FONT_STYLES } from '@styles/common/font-style';
import { CORAL_MAIN_BUTTON } from '@styles/common/button';

export const StJoin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 20px;

  h1 {
    ${FONT_STYLES.SB_20_TITLE};
    color: ${COLOR.GRAY_8};
    margin: 54px 0px 72px 0px;
  }

  & > *:not(& > *:nth-child(2)) {
    width: 100%;
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
