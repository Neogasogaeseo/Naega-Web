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
    display: flex;
    align-items: center;
    gap: 9px;
    margin-bottom: 10px;
    & > svg {
      width: 14px;
      height: 18px;
    }
    & > div {
      ${FONT_STYLES.SB_20_BODY}
      color: ${COLOR.GRAY_6};
    }
  }
`;

export const StLabel = styled.div`
  margin-bottom: 15px;
  text-align: center;
  color: ${COLOR.GRAY_5};
  ${FONT_STYLES.R_15_TITLE}
`;

export const StButton = styled.div`
  ${CORAL_MAIN_BUTTON}
  padding: 15px 16px;
  border-radius: 14px;
  font-size: 15px;
  line-height: 1.44em;
  letter-spacing: -0.0015em;
  margin-top: 15px;
`;
