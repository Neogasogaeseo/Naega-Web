import styled from 'styled-components';
import { FONT_STYLES } from '@styles/common/font-style';
import { COLOR } from '@styles/common/color';

export const StQuestion = styled.div`
  width: 390px;
  height: 390px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const StContent = styled.div`
  position: absolute;
  top: 105px;
  left: 96px;
  & > div:first-child {
    margin-bottom: 6px;
    font-weight: 600;
    font-size: 19px;
    line-height: 100%;
    letter-spacing: -0.015em;
    color: ${COLOR.CORAL_MAIN};
  }
  & > div:last-child {
    ${FONT_STYLES.M_16_BODY}
    white-space: pre;
    line-height: 143.99%;
    letter-spacing: -0.01em;
  }
`;
