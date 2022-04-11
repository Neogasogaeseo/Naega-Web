import { COLOR } from '@styles/common/color';
import { FONT_STYLES } from '@styles/common/font-style';
import styled from 'styled-components';

export const StCommonNavigation = styled.div`
  width: 100%;
  height: 44px;
  position: relative;
  & > * {
    position: absolute;
  }
`;

export const StBack = styled.img`
  margin-left: 14px;
  cursor: pointer;
`;

export const StTitle = styled.div`
  top: 14px;
  left: 50%;
  transform: translate(-50%, 0%);
  ${FONT_STYLES.SB_17_TITLE}
  line-height: 100%;
  letter-spacing: -0.01em;
  color: ${COLOR.GRAY_8};
`;

export const StSubmitButton = styled.button`
  top: 14.33px;
  right: 0;
  margin-right: 14.33px;
  ${FONT_STYLES.M_15_TITLE}
  line-height: 100%;
  letter-spacing: -0.01em;
  color: ${COLOR.CORAL_MAIN};
  background-color: transparent;
`;
