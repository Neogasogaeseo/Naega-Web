import styled from 'styled-components';
import { CORAL_MAIN_BUTTON, FULL_WIDTH_BUTTON } from '@styles/common/button';
import { FONT_STYLES } from '@styles/common/font-style';
import { COLOR } from '@styles/common/color';

export const StTeamMain = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 0 16px;

  & > button {
    ${CORAL_MAIN_BUTTON}
    ${FULL_WIDTH_BUTTON}
    ${FONT_STYLES.M_16_TITLE};
    margin-top: 36px;
    margin-bottom: 35px;

    & > img {
      margin-right: 8px;
    }
  }
`;

export const StTeamInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 7px;

  & > div:first-child {
    display: flex;
    justify-content: end;
    padding-top: 13px;
    padding-bottom: 15px;
    padding-right: 4px;
    width: 100%;

    button {
      background-color: transparent;
      color: ${COLOR.CORAL_MAIN};
      ${FONT_STYLES.M_15_TITLE};
    }
  }

  & > img:nth-of-type(1) {
    width: 82px;
    height: 82px;
    object-fit: cover;
    margin-bottom: 18px;
    border-radius: 30px;
  }

  div:nth-of-type(2) {
    flex: 1;
    text-align: center;

    h1 {
      margin-bottom: 8px;
      color: ${COLOR.GRAY_8};
      font-weight: 600;
      font-size: 20px;
      letter-spacing: -0.015em;
    }

    h2 {
      ${FONT_STYLES.R_15_TITLE};
      color: ${COLOR.GRAY_7};
    }

    h3 {
      ${FONT_STYLES.R_13_TITLE};
      color: ${COLOR.GRAY_5};
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 14.83px;

      img {
        margin-right: 2px;
      }

      button {
        display: flex;
        align-items: center;
        background: ${COLOR.GRAY_2};
        color: ${COLOR.GRAY_5};
        padding: 3px 7px;
        ${FONT_STYLES.R_13_TITLE};
        border-radius: 9px;
        margin-right: 5px;
      }

      span {
        line-height: 19px;
        color: ${COLOR.GRAY_5};
        font-size: 13px;
        letter-spacing: -0.01em;
      }
    }
  }

  & > img:last-child {
    width: 29px;
    height: 29px;
    cursor: pointer;
  }
`;

export const StCheckWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  color: ${COLOR.GRAY_7};
  font-weight: 600;

  button {
    background: transparent;
    width: 24px;
    height: 24px;
    margin-right: 8px;
  }
`;
