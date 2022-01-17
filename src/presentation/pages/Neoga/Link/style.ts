import styled from 'styled-components';
import { CORAL_MAIN_BUTTON, FULL_WIDTH_BUTTON } from '@styles/common/button';
import { FONT_STYLES } from '@styles/common/font-style';
import { COMMON_INPUT } from '@styles/common/input';
import { COLOR } from '@styles/common/color';

export const StNeogaLink = styled.div`
  width: 100vw;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StTitle = styled.div``;

export const StLinkCreateButton = styled.button`
  ${CORAL_MAIN_BUTTON}
  ${FULL_WIDTH_BUTTON}
  margin-top: 121px;
  margin-bottom: 48px;
`;

export const StLinkResultLayout = styled.div`
  padding: 0 20px;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  & > *:first-child {
    margin-top: 189px;
  }
  & > *:nth-child(2) {
    margin-top: 4px;
    display: flex;
    flex-direction: column;
    align-items: center;
    & > div:first-child {
      ${FONT_STYLES.SB_20_TITLE}
      color: ${COLOR.GRAY_8};
      margin-bottom: 10px;
    }
    & > div:last-child {
      ${FONT_STYLES.R_15_TITLE}
      color: ${COLOR.GRAY_5};
      margin-bottom: 229px;
    }
  }
  & > button {
    ${CORAL_MAIN_BUTTON}
    ${FULL_WIDTH_BUTTON}
    margin-bottom: 48px;
  }
`;

export const StLinkBox = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: 16px;
  & > input {
    ${COMMON_INPUT}
    padding: 18px 64px 18px 16px;
    width: 100%;
    height: 52px;
  }
  & > *:nth-child(2) {
    width: 1px;
    height: 26px;
    background-color: ${COLOR.GRAY_3};
    position: absolute;
    right: 56px;
    top: 14px;
  }
  & > *:last-child {
    position: absolute;
    right: 14px;
    top: 12px;
  }
`;
