import { ANIMATION } from '@styles/common/animation';
import { COLOR } from '@styles/common/color';
import { FONT_STYLES } from '@styles/common/font-style';
import styled from 'styled-components';

export const StAbsoluteWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
`;

export const StBlackBlur = styled.div<{ isClosing: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgb(0, 0, 0, 0.44);
  z-index: 50;

  animation: ${({ isClosing }) => (isClosing ? ANIMATION.FADE_OUT : ANIMATION.FADE_IN)} 1s;
`;

export const StWrapper = styled.div<{ isClosing: boolean }>`
  position: fixed;
  width: min(100vw, 390px);
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
  background-color: ${COLOR.WHITE};
  bottom: 0;
  z-index: 60;
  animation: ${({ isClosing }) =>
      isClosing ? ANIMATION.SWIPE_DOWN : ANIMATION.SWIPE_UP({ from: 0 })}
    1s;
`;

export const StButton = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  width: fit-content;
  color: ${COLOR.GRAY_7};
  ${FONT_STYLES.R_16_BODY}
`;

export const StButtonWrapper = styled.div`
  padding-top: 30px;
  padding-bottom: 35px;
  padding-left: 18px;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const StCancelButton = styled.div`
  cursor: pointer;
  text-align: center;
  border-top: 1px solid ${COLOR.GRAY_3};
  padding-top: 16px;
  padding-bottom: 52px;
  color: ${COLOR.GRAY_6};
  ${FONT_STYLES.M_16_TITLE}
`;
