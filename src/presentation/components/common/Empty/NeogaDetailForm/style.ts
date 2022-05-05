import styled from 'styled-components';
import { CORAL_MAIN_BUTTON } from '@styles/common/button';
import { COLOR } from '@styles/common/color';
import { FONT_STYLES } from '@styles/common/font-style';

export const StNeogaDetailFormEmptyView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: calc(100vh - 230px);

  & div {
    text-align: center;
  }

  & div:nth-child(1) {
    color: ${COLOR.GRAY_4};
    ${FONT_STYLES.SB_18_TITLE}
  }
  & div:nth-child(2) {
    color: ${COLOR.GRAY_35};
    margin-top: 12px;
    ${FONT_STYLES.M_14_TITLE}
  }

  button {
    align-self: center;
    margin-top: 40px;
    ${CORAL_MAIN_BUTTON};
    border-radius: 14px;
    padding: 15px 50px;
    font-weight: 500;
    font-size: 15px;
    line-height: 143.99%;
    letter-spacing: -0.015em;
  }
`;
