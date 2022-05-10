import styled from 'styled-components';

import { COLOR } from '@styles/common/color';
import { FONT_STYLES } from '@styles/common/font-style';
import { COMMON_MODAL, COMMON_MODAL_BUTTON } from '@styles/common/modal';

export const StWarningMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  & > * {
    ${FONT_STYLES.R_16_BODY}
    color: ${COLOR.GRAY_7};
  }
  & > *:first-child {
    display: flex;
    gap: 3px;
    & > *:first-child {
      color: ${COLOR.CORAL_MAIN};
      ${FONT_STYLES.SB_16_BODY}
    }
  }
`;

export const StDelegationCheckModal = styled.div`
  ${COMMON_MODAL}
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 42px 24px 24px 24px;
  & > *:last-child {
    margin-top: 27px;
    ${COMMON_MODAL_BUTTON}
  }
`;
