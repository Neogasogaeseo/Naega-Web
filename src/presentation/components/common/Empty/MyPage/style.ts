import { CORAL_MAIN_BUTTON } from '@styles/common/button';
import { COLOR } from '@styles/common/color';
import { FONT_STYLES } from '@styles/common/font-style';
import styled from 'styled-components';

export const StMyEmptyView = styled.div`
  height: 390px;
  justify-content: center;
  display: flex;
  align-items: center;
  flex-direction: column;

  & > div:nth-child(1) {
    ${FONT_STYLES.SB_18_TITLE}
    color: ${COLOR.GRAY_4};
  }
  & > div:nth-child(2) {
    margin-top: 14px;
    ${FONT_STYLES.R_14_BODY}
    color: ${COLOR.GRAY_4};
  }
`;

export const StLabel = styled.div`
  margin-bottom: 15px;
  text-align: center;
  color: ${COLOR.GRAY_5};
  ${FONT_STYLES.R_15_TITLE}
  line-height: 1.4em;
`;

export const StButton = styled.div`
  ${CORAL_MAIN_BUTTON}
  padding: 15px 16px;
  border-radius: 14px;
  font-size: 15px;
  line-height: 1.44em;
  letter-spacing: -0.0015em;
  margin-top: 15px;
  cursor: pointer;
`;
