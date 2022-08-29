import { COLOR } from '@styles/common/color';
import { FONT_STYLES } from '@styles/common/font-style';
import styled from 'styled-components';

export const StNeososeoFormHome = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${COLOR.GRAY_1};
  display: grid;
  grid-template-rows: 44px 96px auto 110px;

  & > div:not(:nth-child(1)) {
    padding: 0 20px;
  }

  & > div:nth-child(2) {
    & img {
      width: 60px;
      height: 60px;
      border-radius: 20px;
      image-orientation: from-image;
    }
    display: flex;
    gap: 16px;
    align-self: flex-end;
    & > div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 8px;
      & > div:nth-child(1) {
        color: ${COLOR.GRAY_8};
        ${FONT_STYLES.SB_20_TITLE}
      }
      & > div:nth-child(2) {
        color: ${COLOR.GRAY_5};
        ${FONT_STYLES.R_14_TITLE}
      }
    }
  }
  & > div:nth-child(3) {
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
  }
`;

export const StAnswerCount = styled.div`
  color: ${COLOR.CORAL_MAIN};
  position: absolute;
  bottom: 32px;
  font-weight: 500;
  font-size: 16px;
`;
