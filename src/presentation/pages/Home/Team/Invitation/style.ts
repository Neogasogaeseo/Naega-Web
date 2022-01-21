import styled from 'styled-components';
import { COLOR } from '@styles/common/color';
import { FONT_STYLES } from '@styles/common/font-style';

export const StInvitation = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${COLOR.GRAY_1};
  color: ${COLOR.GRAY_6};
  width: 100%;
  height: 57px;
  margin-left: 0;
  ${FONT_STYLES.R_14_TITLE};
  padding-left: 14px;
  padding-right: 19px;

  & div {
    display: flex;
    align-items: center;
  }

  span {
    color: ${COLOR.CORAL_MAIN};
    font-weight: 600;
  }

  button {
    border-radius: 8px;
    padding: 10px 14px;
    ${FONT_STYLES.M_13_TITLE};
  }

  button:nth-of-type(1) {
    margin-right: 6px;
    color: ${COLOR.WHITE};
    background: ${COLOR.CORAL_MAIN};
  }

  button:nth-of-type(2) {
    color: ${COLOR.GRAY_6};
    background-color: ${COLOR.GRAY_3};
  }
`;
