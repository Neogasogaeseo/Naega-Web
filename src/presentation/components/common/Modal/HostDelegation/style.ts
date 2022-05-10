import styled from 'styled-components';

import { COLOR } from '@styles/common/color';
import { COMMON_MODAL, COMMON_MODAL_BUTTON } from '@styles/common/modal';
import { FONT_STYLES } from '@styles/common/font-style';

export const StHostDelegationModal = styled.div`
  ${COMMON_MODAL}
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 24px 24px 24px;
  & > *:nth-child(1) {
    margin-top: 44px;
    color: ${COLOR.GRAY_8};
    ${FONT_STYLES.SB_20_TITLE}
  }
  & > *:nth-child(2) {
    margin-top: 17px;
    color: ${COLOR.GRAY_5};
    ${FONT_STYLES.R_15_BODY}
    line-height: 143.99%;
    white-space: pre-line;
    text-align: center;
  }
  & > :nth-child(3) {
    margin-top: 30px;
    width: 294px;
  }
  & > :nth-child(4) {
    margin-top: 38px;
    ${COMMON_MODAL_BUTTON}
  }
`;
