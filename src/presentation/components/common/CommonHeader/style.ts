import { COLOR } from '@styles/common/color';
import { FONT_STYLES } from '@styles/common/font-style';
import styled from 'styled-components';

export const StCommonHeader = styled.div`
  width: 100%;
  height: 44px;
  position: relative;
  & > *:first-child {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;
  }
`;

export const StWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  & > *:last-child {
    margin-left: 10px;
  }
`;

export const StLoginButton = styled.button`
  background-color: ${COLOR.GRAY_6};
  border-radius: 13.5px;
  ${FONT_STYLES.R_12_TITLE}
  line-height: 100%;
  letter-spacing: -0.01em;
  color: ${COLOR.WHITE};
  padding: 7px 12px;
`;

export const StNotification = styled.div`
  width: 7px;
  height: 7px;
  position: absolute;
  top: 14px;
  right: 19px;
  box-sizing: content-box;
  border-radius: 50%;
  border: 1px solid #ffffff;
  background-color: ${COLOR.CORAL_MAIN};
`;
