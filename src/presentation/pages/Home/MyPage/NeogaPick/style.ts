import styled from 'styled-components';

import { COLOR } from '@styles/common/color';
import { FONT_STYLES } from '@styles/common/font-style';

export const StMyNeogaPick = styled.div`
  header {
    background-color: ${COLOR.GRAY_1};
    height: 76px;
    padding: 18px 20px;
    ${FONT_STYLES.R_14_BODY};
    color: ${COLOR.GRAY_6};
    line-height: 140%;

    span {
      color: ${COLOR.CORAL_MAIN};
    }
  }
`;

export const StMyNeogaFormList = styled.div`
  padding: 0 24px;

  & > div:first-child {
    padding-top: 26px;
  }

  & > div:last-child {
    padding-top: 36px;
    color: ${COLOR.GRAY_8};
    ${FONT_STYLES.SB_18_TITLE};
  }
`;

export const StMyNeogaPickList = styled.div`
  padding: 0 21px;
`;
