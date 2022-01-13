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
    margin-top: 48px;
    margin-bottom: 27px;

    & > img {
      margin-right: 8px;
    }
  }
`;

export const StTeamInfo = styled.div`
  display: flex;
  margin-top: 43px;

  & > img:first-child {
    width: 82px;
    height: 82px;
    object-fit: cover;
    margin-right: 18px;
    margin-bottom: 1px;
    border-radius: 30px;
  }

  & > div {
    flex: 1;

    h1 {
      ${FONT_STYLES.B_24_TITLE};
      margin-top: 5px;
      margin-bottom: 10px;
      color: ${COLOR.BLACK};
    }

    h2 {
      ${FONT_STYLES.R_14_TITLE};
      margin-bottom: 15px;
      color: ${COLOR.GRAY_7};
    }

    h3 {
      ${FONT_STYLES.R_13_TITLE};
      color: ${COLOR.GRAY_5};
      span {
        /* 마진 값 확정 아님 */
        margin-left: 6px;
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
  margin-bottom: 20px;

  & img {
    width: 24px;
    height: 24px;
    cursor: pointer;
    margin-right: 5px;
  }
`;
