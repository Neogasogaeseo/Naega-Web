import styled from 'styled-components';

import { COLOR } from '@styles/common/color';
import { FONT_STYLES } from '@styles/common/font-style';

export const StMyTeamPick = styled.div`
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

export const StMyTeamList = styled.div`
  & > div {
    padding: 30px 23px 29px 23px;
  }
`;

export const StMyTeamPickList = styled.div`
  padding: 0 24px;
`;
