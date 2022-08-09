import styled from 'styled-components';
import { COLOR } from '@styles/common/color';
import { FONT_STYLES } from '@styles/common/font-style';
import { COMMON_MODAL, COMMON_MODAL_BUTTON, CORAL_MODAL_BUTTON } from '@styles/common/modal';

export const StCommonModal = styled.div<{ isCoral: boolean }>`
  ${COMMON_MODAL}
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 336px;
  & > *:nth-child(1) {
    margin-top: 32px;
  }
  & > *:nth-child(2) {
    margin-top: 24px;
    margin-bottom: 10px;
    ${FONT_STYLES.SB_17_BODY}
    line-height: 143.99%;
    letter-spacing: -0.01em;
    color: ${COLOR.GRAY_8};
  }
  & > *:last-child {
    margin: 34px 19px 24px 19px;
    color: ${({ isCoral }) => (isCoral ? CORAL_MODAL_BUTTON : COMMON_MODAL_BUTTON)};
  }
`;

export const StDescription = styled.div`
  margin-top: 10px;
  color: ${COLOR.GRAY_5};
  ${FONT_STYLES.R_15_BODY}
  line-height: 143.99%;
  letter-spacing: -0.01em;
  text-align: center;
  white-space: pre-line;
`;
