import styled from 'styled-components';

import { COLOR } from '@styles/common/color';
import { FONT_STYLES } from '@styles/common/font-style';

export const StFormItem = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StInputStatus = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StErrorMsg = styled.div`
  padding-left: 4px;
  padding-top: 15px;
  color: ${COLOR.CORAL_MAIN};
  ${FONT_STYLES.R_14_TITLE};
`;

export const StCount = styled.div<{ isMax: boolean }>`
  padding-right: 6px;
  padding-top: 6px;
  color: ${(props) => (props.isMax ? COLOR.CORAL_MAIN : COLOR.GRAY_4)};
  ${FONT_STYLES.R_13_TITLE};
`;
